# Plan — Skills section as a resume-driven tag cloud

Implements `spec-plan/260509-skills-spec.md`. Plan saved to `spec-plan/260509-skills-plan.md` per user direction (overrides the default plan-file location).

## Context

The current `<section id="skills">` (`index.html:209–256`) is leftover content from the upstream `rajaprerak.github.io` template — three white-background `.icon-box` panels listing Python / ML stack logos that have nothing to do with this site's owner (Andrei: 17+ year .NET dev). The white backgrounds also fight the dark-navy / green aesthetic established in passes 1–4 of the FE-design work.

Goal: replace the hand-curated wallpaper with a **data-driven tag cloud** sourced from the work-experience tech-stack arrays already present on `window.resume` (`workRecent`, `workOld`). Each tag is weighted by occurrence count (so frequently-used tech reads as "highest proficiency"), coalesced under a canonical name (`net5.0` / `net6.0` / `netcore3.1` → `dotnet`; `c# 9` / `c# 12` → `C#`), and decorated with a vectorlogo.zone SVG when one exists.

Existing patterns to reuse:

- Lazy-population on first nav click — pattern in `assets/js/education.js:1–9` (`#x-link` desktop + `.mobile-nav > ul > li > a[href='#x']` mobile clone). Mirror exactly.
- Idempotent guard via `$(rowSelector).children().length === 0` — used by `renderWorkInto` in `workExperienceCommon.js:3–9` and `onEducation` in `education.js:11–21`. Mirror.
- Tile chrome (background, border, hover) — mirror `.we-pill` (`style.css` ~line 1335) for the basic pill styling, but bump padding and add room for a logo.
- CSS variables — use the existing `--fe-accent`, `--fe-accent-soft`, `--fe-accent-edge`, `--fs-body`, `--fs-tiny` defined in passes 3–4.

## Architectural decisions baked into this plan

1. **Authoritative source: a hand-curated index file.** Spec says "use the semantic index as the authoritative source of truth for the tag cloud" — so a new file `assets/js/skillsIndex.js` defines `window.skillsIndex` as the canonical list. Tokens not in the index do **not** appear in the cloud. Curating the index is the user's lever for what shows.
2. **Matching strategy: lowercase exact-match against an `aliases[]` array.** No fuzzy matching, no substring search — too many false positives ("Docker" would match "Docker Compose"). Index entries enumerate every variant explicitly. Cost: a few minutes of curation. Benefit: predictable.
3. **Coalescing happens through `aliases[]`, not at runtime.** Modern unified `dotnet`, classic `dotnetframework`, modern `aspnetcore`, and classic `aspnet` are **four separate entries** (per user direction — keep era-distinct categories distinct in the cloud): `dotnet` covers .NET 5/6/8 + .NET Core runtime + .NET Standard; `dotnetframework` covers full Framework 4.x; `aspnetcore` covers asp.net-core 2.x; `aspnet` covers classic asp.net mvc + razor + episerver. `csharp` aliases `["c# 7", "c# 7.1", "c# 7.2", "c# 7.3", "c# 9", "c# 10", "c# 12"]`. Any token matching any alias maps to the canonical entry.
4. **Visual: uniform pill, weighted in three discrete buckets by count.** Not a freeform "Web 2.0" cloud with random font sizes — that would clash with the editorial-grade aesthetic established in passes 1–4. Buckets: `count === 1` → small, `count === 2..3` → medium, `count >= 4` → large. Each pill: optional logo (24px tall) + label (uppercase mini-eyebrow at small, body at large) + optional `×N` count indicator on hover.
5. **One flat cloud, no category headers.** The user said "tag cloud", which means a single bag. Category metadata is internal to the index (used for sort tie-breaking and possibly subtle accent coloring) but not rendered as section dividers.
6. **Logos: prefer `*-icon.svg` (transparent, brand-mark only) over `*-horizontal.svg` (often white-backed).** Sidesteps the user's complaint about white-background logos. The label is rendered as text in the pill anyway — a logo-with-built-in-text-label would be redundant and would carry the white panel issue. Per-entry override `logoUrl` allows full URL when icon variant doesn't exist or doesn't read well.
7. **Sort order: descending by count, ties broken by category then alphabetical.** Most-used tech surfaces first.
8. **Data-quirk handling: source-data fixes, not matcher heuristics.** Three known quirks from the comma-split rule (Pass 1 plan §"Decisions"):
   - `"Service Fabric. Educated myself with Kubernetes"` → split into `"Service Fabric"` + `"Kubernetes"` in `resume.js`.
   - `"Redis. Kusto/KQL"` → split into `"Redis"` + `"Kusto"`.
   - `"c# 9,10"` artefact `"10"` → drop or merge with `"c# 9"`.
   These are 3 small `resume.js` edits done as part of execution.

## New & modified files

| File | Action | Purpose |
|---|---|---|
| `assets/js/skillsIndex.js` | **create** | `window.skillsIndex` — array of canonical skill entries. Authoritative source. |
| `assets/js/skills.js` | **create** | `onSkills()` (nav-click handler + idempotent guard) + `buildSkillsCloud()` (count + sort) + `skillsTile(skill)` (DOM builder). Mirrors `education.js` style. |
| `assets/js/resume.js` | edit | Three small data fixes for the comma-split quirks listed above. |
| `index.html` | edit | Replace the body of `<section id="skills">` with an empty `#skillsCloud` container. Add `id="skills-link"` to the nav `<li>` for `#skills`. Add three `<script>` tags loading skills assets after `workExperienceOld.js`. |
| `assets/css/style.css` | edit | Append a `.skills-*` namespace block (~80 lines). Reuse existing `--fe-*` and `--fs-*` variables. |

No vendor libraries added. No fonts added. No new DOM-id contracts beyond `#skillsCloud` and `#skills-link`.

## `assets/js/skillsIndex.js` — entry shape & starter content

```js
/* skills index — authoritative source for the Skills tag cloud.
   Each entry maps a canonical skill to (a) the resume.js tokens that should
   roll up into it, (b) the vectorlogo.zone (or other) logo URL when one exists. */

window.skillsIndex = [
  // === Languages ===
  { id: "csharp",  label: "C#",       category: "language",
    aliases: ["c# 7", "c# 7.1", "c# 7.2", "c# 7.3", "c# 9", "c# 10", "c# 12"],
    logoUrl: "https://www.vectorlogo.zone/logos/microsoft_csharp/microsoft_csharp-icon.svg" },

  // === Runtimes / Frameworks ===
  // Modern unified .NET (5+) + .NET Core (3.x predecessor) + .NET Standard (cross-target)
  { id: "dotnet",  label: ".NET",     category: "framework",
    aliases: ["net5.0", "net6.0", "net8.0", "netcore3.1", "netstandard2.1",
              ".net-standard2", ".net-core", ".net-core 2", "language-ext"],
    logoUrl: "https://www.vectorlogo.zone/logos/dotnetfoundation/dotnetfoundation-icon.svg" },

  // Classic .NET Framework (1.x–4.8, Windows-only, pre-unification)
  { id: "dotnetframework", label: ".NET Framework", category: "framework",
    aliases: ["full framework 4.7.2"],
    logoUrl: "https://www.vectorlogo.zone/logos/dotnetfoundation/dotnetfoundation-icon.svg" },

  // Classic ASP.NET MVC + Razor + EpiServer (full-framework era web stack)
  { id: "aspnet",  label: "ASP.NET",  category: "framework",
    aliases: ["asp.net mvc", "razor", "episerver"],
    logoUrl: null },

  // Modern ASP.NET Core (cross-platform web framework on top of .NET Core / .NET 5+)
  { id: "aspnetcore", label: "ASP.NET Core", category: "framework",
    aliases: ["asp.net-core", "asp.net-core 2.1", "asp.net-core 2.2"],
    logoUrl: null },

  // === Databases & Storage ===
  { id: "postgresql", label: "PostgreSQL", category: "database",
    aliases: ["postgresql"],
    logoUrl: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
  { id: "sqlserver",  label: "SQL Server", category: "database",
    aliases: ["sql server", "sql server 2016", "tsql", "sqlgeometry", "dacpac"],
    logoUrl: "https://www.vectorlogo.zone/logos/microsoft_sqlserver/microsoft_sqlserver-icon.svg" },
  { id: "mongodb",    label: "MongoDB",    category: "database",
    aliases: ["mongodb"],
    logoUrl: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
  { id: "redis",      label: "Redis",      category: "database",
    aliases: ["redis"],
    logoUrl: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg" },
  { id: "cosmosdb",   label: "Cosmos DB",  category: "database",
    aliases: ["cosmos db", "cosmosdb", "documentdb"],
    logoUrl: "https://www.vectorlogo.zone/logos/microsoft_azure_cosmosdb/microsoft_azure_cosmosdb-icon.svg" },
  { id: "azurestorage", label: "Azure Storage", category: "database",
    aliases: ["table", "blob", "queue storage", "azure queues", "azure storage"],
    logoUrl: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
  { id: "kusto",      label: "Kusto / KQL", category: "database",
    aliases: ["kusto", "kusto/kql"],
    logoUrl: null },
  { id: "dapper",     label: "Dapper",     category: "database",
    aliases: ["dapper"], logoUrl: null },
  { id: "ef",         label: "EF / EF Core", category: "database",
    aliases: ["ef6", "ef core"], logoUrl: null },
  { id: "dynamics",   label: "Dynamics",   category: "database",
    aliases: ["dynamics"], logoUrl: null },

  // === Cloud / Infra ===
  { id: "azure",      label: "Azure",      category: "cloud",
    aliases: ["appinsights", "application insights", "azure eventhubs"],
    logoUrl: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
  { id: "kubernetes", label: "Kubernetes", category: "infrastructure",
    aliases: ["kubernetes"],
    logoUrl: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
  { id: "docker",     label: "Docker",     category: "infrastructure",
    aliases: ["docker"],
    logoUrl: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
  { id: "servicefabric", label: "Service Fabric", category: "infrastructure",
    aliases: ["service fabric"], logoUrl: null },
  { id: "orleans",    label: "Orleans",    category: "infrastructure",
    aliases: ["orleans"], logoUrl: null },
  { id: "dapr",       label: "Dapr",       category: "infrastructure",
    aliases: ["dapr"],
    logoUrl: "https://www.vectorlogo.zone/logos/dapr_io/dapr_io-icon.svg" },
  { id: "kestrel",    label: "Kestrel Edge", category: "infrastructure",
    aliases: ["kestrel edge"], logoUrl: null },
  { id: "debian",     label: "Debian",     category: "infrastructure",
    aliases: ["debian 10"],
    logoUrl: "https://www.vectorlogo.zone/logos/debian/debian-icon.svg" },

  // === Source control / bug tracking ===
  { id: "git",        label: "git",        category: "sourceControl",
    aliases: ["git"],
    logoUrl: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  { id: "github",     label: "GitHub",     category: "sourceControl",
    aliases: ["github"],
    logoUrl: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
  { id: "gitlab",     label: "GitLab",     category: "sourceControl",
    aliases: ["gitlab"],
    logoUrl: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg" },
  { id: "azuredevops", label: "Azure DevOps", category: "sourceControl",
    aliases: ["azure repos", "azure devops", "vsts", "azure pipelines",
              "boards", "azure ci/cd", "pipelines"],
    logoUrl: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
  { id: "bitbucket",  label: "Bitbucket",  category: "sourceControl",
    aliases: ["bitbucket"],
    logoUrl: "https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg" },
  { id: "jira",       label: "Jira",       category: "bugTracking",
    aliases: ["jira", "jira nextgen"],
    logoUrl: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg" },
  { id: "confluence", label: "Confluence", category: "bugTracking",
    aliases: ["confluence"],
    logoUrl: "https://www.vectorlogo.zone/logos/atlassian_confluence/atlassian_confluence-icon.svg" },
  { id: "markdown",   label: "Markdown",   category: "tool",
    aliases: ["markdown"],
    logoUrl: "https://www.vectorlogo.zone/logos/markdown/markdown-icon.svg" },

  // === Testing ===
  { id: "xunit",     label: "xUnit",          category: "testing",
    aliases: ["xunit"], logoUrl: null },
  { id: "nunit",     label: "NUnit",          category: "testing",
    aliases: ["nunit"], logoUrl: null },
  { id: "mstest",    label: "MSTest",         category: "testing",
    aliases: ["mstest", "mstest/fluentassertions"], logoUrl: null },
  { id: "fluentassertions", label: "FluentAssertions", category: "testing",
    aliases: ["fluentassertions"], logoUrl: null },
  { id: "moq",       label: "Moq",            category: "testing",
    aliases: ["moq"], logoUrl: null },
  { id: "nsubstitute", label: "NSubstitute",  category: "testing",
    aliases: ["nsubstitute"], logoUrl: null },
  { id: "nfluent",   label: "NFluent",        category: "testing",
    aliases: ["nfluent"], logoUrl: null },
  { id: "altcover",  label: "AltCover",       category: "testing",
    aliases: ["altcover"], logoUrl: null },
  { id: "ioabstractions", label: "IO.Abstractions", category: "testing",
    aliases: ["io abstractions", "io.abstractions"], logoUrl: null },

  // === Messaging ===
  { id: "rabbitmq",  label: "RabbitMQ",  category: "messaging",
    aliases: ["rabbitmq", "rawrabbit"],
    logoUrl: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg" },
  { id: "masstransit", label: "MassTransit", category: "messaging",
    aliases: ["masstransit"], logoUrl: null },
  { id: "nats",      label: "NATS",      category: "messaging",
    aliases: ["nats"],
    logoUrl: "https://www.vectorlogo.zone/logos/nats_io/nats_io-icon.svg" },
  { id: "neventstore", label: "NEventStore", category: "messaging",
    aliases: ["neventstore"], logoUrl: null },

  // === Observability / APM ===
  { id: "serilog",   label: "Serilog",   category: "logging",
    aliases: ["serilog"], logoUrl: null },
  { id: "elastic",   label: "Elasticsearch", category: "apm",
    aliases: ["elastic search", "elasticsearch"],
    logoUrl: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" },
  { id: "kibana",    label: "Kibana",    category: "apm",
    aliases: ["kibana"],
    logoUrl: "https://www.vectorlogo.zone/logos/elastic_kibana/elastic_kibana-icon.svg" },
  { id: "logstash",  label: "Logstash",  category: "apm",
    aliases: ["logstash"],
    logoUrl: "https://www.vectorlogo.zone/logos/elastic_logstash/elastic_logstash-icon.svg" },
  { id: "prometheus", label: "Prometheus", category: "apm",
    aliases: ["prometheus"],
    logoUrl: "https://www.vectorlogo.zone/logos/prometheus_io/prometheus_io-icon.svg" },

  // === Web / Frontend ===
  { id: "angular",   label: "Angular",   category: "web",
    aliases: ["angular [2-4]", "angular 7", "angular material 7.2", "prime ng"],
    logoUrl: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg" },
  { id: "react",     label: "React",     category: "web",
    aliases: ["react"],
    logoUrl: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
  { id: "bootstrap", label: "Bootstrap", category: "web",
    aliases: ["bootstrap"],
    logoUrl: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" },
  { id: "html5",     label: "HTML5",     category: "web",
    aliases: ["html5"],
    logoUrl: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
  { id: "css3",      label: "CSS3",      category: "web",
    aliases: ["css3"],
    logoUrl: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" },
  { id: "sass",      label: "Sass",      category: "web",
    aliases: ["scss", "sass"],
    logoUrl: "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg" },
  { id: "webpack",   label: "Webpack",   category: "web",
    aliases: ["webpack"],
    logoUrl: "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg" },
  { id: "karma",     label: "Karma",     category: "web",
    aliases: ["karma"], logoUrl: null },
  { id: "jasmine",   label: "Jasmine",   category: "web",
    aliases: ["jasmine"],
    logoUrl: "https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg" },

  // === Web APIs / Patterns ===
  { id: "swagger",   label: "Swagger",   category: "webApi",
    aliases: ["swaggerui", "autorest"],
    logoUrl: "https://www.vectorlogo.zone/logos/swagger/swagger-icon.svg" },
  { id: "automapper", label: "AutoMapper", category: "webApi",
    aliases: ["automapper"], logoUrl: null },
  { id: "fluentvalidation", label: "FluentValidation", category: "webApi",
    aliases: ["fluentvalidation"], logoUrl: null },
  { id: "microservices", label: "microservices", category: "design",
    aliases: ["microservices"], logoUrl: null },

  // === Architecture ===
  { id: "ddd",       label: "DDD",       category: "design",
    aliases: ["ddd"], logoUrl: null },
  { id: "cqrs",      label: "CQRS",      category: "design",
    aliases: ["cqrs"], logoUrl: null },
  { id: "mediatr",   label: "MediatR",   category: "design",
    aliases: ["mediatr"], logoUrl: null },
  { id: "dryioc",    label: "DryIoC",    category: "design",
    aliases: ["dryioc"], logoUrl: null },
  { id: "autofac",   label: "Autofac",   category: "design",
    aliases: ["autofac"], logoUrl: null },

  // === Tools / Misc ===
  { id: "polly",     label: "Polly",     category: "tool",
    aliases: ["polly"], logoUrl: null },
  { id: "flurl",     label: "Flurl",     category: "tool",
    aliases: ["flurl"], logoUrl: null },
  { id: "nodatime",  label: "NodaTime",  category: "tool",
    aliases: ["nodatime"], logoUrl: null },
  { id: "resharper", label: "ReSharper", category: "tool",
    aliases: ["resharper"],
    logoUrl: "https://www.vectorlogo.zone/logos/jetbrains_resharper/jetbrains_resharper-icon.svg" },
  { id: "healthchecks", label: "HealthChecks", category: "tool",
    aliases: ["healthchecks"], logoUrl: null }
];
```

This list covers ~95% of tokens in `resume.js workRecent + workOld`. Tokens like `"improve test coverage"` (a free-form description fragment, not a tool) are intentionally absent — they don't represent a skill and shouldn't appear in the cloud.

## `assets/js/skills.js` — renderer algorithm

```js
$("#skills-link").on("click", function () { onSkills(); });
$(".mobile-nav > ul > li > a[href='#skills']").on("click", function () { onSkills(); });

function onSkills() {
    if (!window.resume || !window.skillsIndex) return;
    if ($("#skillsCloud").children().length > 0) return;
    var cloud = buildSkillsCloud();
    cloud.forEach(function (skill) {
        $("#skillsCloud").append(skillsTile(skill));
    });
}

function buildSkillsCloud() {
    var counts = {};
    [].concat(window.resume.workRecent || [], window.resume.workOld || [])
      .forEach(function (entry) {
          STACK_FIELDS.forEach(function (field) {
              var arr = entry[field];
              if (!Array.isArray(arr)) return;
              arr.forEach(function (token) {
                  var skill = matchSkill(token);
                  if (skill) counts[skill.id] = (counts[skill.id] || 0) + 1;
              });
          });
      });
    return window.skillsIndex
        .filter(function (s) { return counts[s.id] > 0; })
        .map(function (s) { return Object.assign({}, s, { count: counts[s.id] }); })
        .sort(function (a, b) {
            if (b.count !== a.count) return b.count - a.count;
            if (a.category !== b.category) return a.category.localeCompare(b.category);
            return a.label.localeCompare(b.label);
        });
}

function matchSkill(token) {
    var norm = String(token).trim().toLowerCase();
    if (!norm) return null;
    return window.skillsIndex.find(function (s) {
        if (s.id === norm || s.label.toLowerCase() === norm) return true;
        return s.aliases.some(function (a) { return a.toLowerCase() === norm; });
    });
}

function skillsTile(s) {
    var bucket = s.count >= 4 ? "lg" : (s.count >= 2 ? "md" : "sm");
    var tile = $("<span>")
        .addClass("skills-tag skills-tag--" + bucket)
        .attr("data-category", s.category)
        .attr("data-count", s.count);
    if (s.logoUrl) {
        tile.append($("<img>").addClass("skills-tag-logo")
            .attr("src", s.logoUrl).attr("alt", "").attr("loading", "lazy"));
    }
    tile.append($("<span>").addClass("skills-tag-label").text(s.label));
    if (s.count > 1) {
        tile.append($("<span>").addClass("skills-tag-count").text("×" + s.count));
    }
    return tile;
}
```

`STACK_FIELDS` constant (top of file):
```js
var STACK_FIELDS = [
    "language", "database", "storageData", "tests", "srcTrk",
    "messaging", "deployment", "logging", "distributed",
    "infrastructure", "apm", "web", "webApis", "cloud",
    "design", "misc"
];
```

This matches the field order in `workExperienceCommon.js:81–98`.

## CSS — `.skills-*` namespace

Append to `style.css`. Reuses existing `--fe-*` and `--fs-*` variables.

```css
/*--------------------------------------------------------------
# Skills tag cloud
--------------------------------------------------------------*/
#skills .skills-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  padding: 4px 0;
}

.skills-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  color: #fff;
  font-weight: 500;
  line-height: 1;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
  cursor: default;
}

.skills-tag:hover {
  background: var(--fe-accent-soft);
  border-color: var(--fe-accent-edge);
  transform: translateY(-1px);
}

.skills-tag-logo {
  height: 18px;
  width: auto;
  max-width: 28px;
  object-fit: contain;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));
}

.skills-tag-label {
  font-size: var(--fs-small);
  letter-spacing: 0.01em;
}

.skills-tag-count {
  font-size: var(--fs-mini);
  font-weight: 700;
  color: var(--fe-muted, rgba(255,255,255,0.55));
  letter-spacing: 0.05em;
}

/* size buckets: small / medium / large by occurrence count */
.skills-tag--sm { padding: 4px 10px; }
.skills-tag--sm .skills-tag-label { font-size: var(--fs-tiny); }
.skills-tag--sm .skills-tag-logo  { height: 14px; }

.skills-tag--md { padding: 5px 12px; }
.skills-tag--md .skills-tag-label { font-size: var(--fs-small); }
.skills-tag--md .skills-tag-logo  { height: 18px; }

.skills-tag--lg { padding: 7px 14px; }
.skills-tag--lg .skills-tag-label { font-size: var(--fs-body); font-weight: 600; }
.skills-tag--lg .skills-tag-logo  { height: 22px; }
.skills-tag--lg { background: rgba(18, 214, 64, 0.08); border-color: var(--fe-accent-edge); }
```

The `lg` bucket gets a subtle green-tinted background — most-used tech reads as visually emphasised without breaking the uniform pill grammar.

## `index.html` surgery

**1. Nav `<li>` (around line 81)** — currently `<li><a href="#skills"><span>Skills</span></a></li>`. Add `id="skills-link"`:
```html
<li><a href="#skills" id="skills-link"><span>Skills</span></a></li>
```

**2. `<section id="skills">` body (lines 209–256)** — replace the whole inner content with:
```html
<section id="skills" class="services">
  <div class="container">
    <div class="section-title">
      <h2>Skills</h2>
    </div>
    <div id="skillsCloud" class="skills-cloud" data-aos="fade-up"></div>
  </div>
</section>
```

Removes the three white-background `.icon-box` panels and all hardcoded vendor logos. The `.services` class on the section keeps it consistent with Experience / Heritage / Education styling.

**3. Script tags** — after the `workExperienceOld.js` line (around line 371), add:
```html
<script type="text/javascript" src="assets/js/skillsIndex.js"></script>
<script type="text/javascript" src="assets/js/skills.js"></script>
```

`skillsIndex.js` must load before `skills.js` (the renderer reads `window.skillsIndex`).

## Three small `resume.js` data fixes

Edit existing tech-stack arrays in `assets/js/resume.js` to clean up the comma-split quirks. These were known data artefacts from the Pass 1 work-experience integration; the spec implicitly requires them fixed for the matcher to pick up Service Fabric, Kubernetes, Redis, and Kusto correctly.

1. **Microsoft entry** `distributed` (currently `["Service Fabric. Educated myself with Kubernetes", "Orleans", "dapr"]`):
   change to `["Service Fabric", "Kubernetes", "Orleans", "dapr"]`.

2. **Microsoft entry** `storageData` (currently `["Table", "blob", "queue storage", "Redis. Kusto/KQL"]`):
   change to `["Table", "blob", "queue storage", "Redis", "Kusto"]`.

3. **Collectius entry** `language` (currently `["c# 9", "10", "net5.0", "net6.0"]`):
   change to `["c# 9", "c# 10", "net5.0", "net6.0"]` (the lonely `"10"` was originally part of `"c# 9,10"`).

These same fixes also clean up the work-experience pill rendering — bonus side effect.

## Data flow at runtime

```
page load
  → resume.js sets window.resume          (existing)
  → skillsIndex.js sets window.skillsIndex (new)
  → skills.js binds nav-click handlers     (new)

user clicks "Skills"
  → onSkills() fires (idempotent guard)
  → buildSkillsCloud():
       walk every entry in workRecent + workOld
       for every STACK_FIELDS array element:
         matchSkill(token, skillsIndex) → {skill | null}
         if skill: counts[skill.id]++
       filter index to entries with count > 0
       sort by (count desc, category asc, label asc)
  → for each surviving skill: append skillsTile() to #skillsCloud
```

## Verification

Static site, no test runner. Manual smoke test from a static server (`python -m http.server` in the repo root):

1. **Hard-refresh `index.html`**, click the **Skills** nav link.
2. Confirm the previous three white-background `.icon-box` panels are gone.
3. Confirm a single horizontal flow of pills appears under the "Skills" section title.
4. **Bucket distribution sanity check**: `dotnet`, `csharp`, and `azuredevops` should all be in the `--lg` bucket (count ≥ 4 — they appear in most entries). `polly`, `flurl`, `nodatime` should be `--sm` (single-use). Tile sizes should reflect this.
5. **Logo rendering**: pills with a `logoUrl` show a small icon to the left of the label; pills without (`null`) show label-only with the same pill chrome. No white panels.
6. **Hover**: each pill background turns soft-green, slight `translateY(-1px)`.
7. **Sort order**: scan left-to-right — most-used tech first.
8. **Re-click guard**: click "Skills" again → no duplicate tiles (idempotent guard works).
9. **Mobile nav** (narrow viewport): tap "Skills" from the burger menu → cloud renders correctly.
10. **Console clean**: no 404 for any `vectorlogo.zone` URL; if a logo URL is wrong, the broken-image icon should NOT appear (the `<img>` has `alt=""` so it's effectively decorative — but a 404 still gets logged. Audit the network tab and patch `logoUrl: null` on any that 404.)

## Out of scope / follow-ups

- **Reusing `window.skillsIndex` to enrich work-experience pills** with logos. Possible follow-up; would replace the green-bg pill chrome in `workExperienceCommon.js pillGroup` with a logo-aware version. Not required for this spec.
- **Search / filter UI on the cloud** (click a category, dim others). Out of scope.

## Open clarifications baked into this plan

These would be worth confirming on review, but I've made decisions to keep the plan executable:

1. **`*-icon.svg` over `*-horizontal.svg`** — picked icon variants for the index because horizontal variants often have white backgrounds (which the user explicitly disliked) and bake in brand text that's redundant with the pill label. If the user prefers horizontal for any specific entries, override per-entry.
2. **Category headers vs flat cloud — DEFERRED.** Per user direction (post-spec-revision), this decision is parked **until after the semantic lookup is implemented** and we can see the actual data. Initial implementation ships as a flat cloud with per-category accent colours (see §"Per-category accent palette" below). Once the cloud renders, evaluate: is the category coding via colour + the count-bucket sizing sufficient to read the structure, or do we need explicit `<h6>` group headers? Trivial to add a second mode later — `renderSkillsCloud(rowSelector, { grouped: true })` would group by `category` and emit one heading per group. **No commitment in this plan; revisit after first render.**
3. **Discrete 3-bucket weighting** instead of freeform font-size scaling. Editorial rather than vintage-Web-2.0 cloud. Drop-in change to size-buckets if a finer scale is wanted.
4. **Resume.js data fixes are part of this PR** rather than a separate one. They're 3 lines and the matcher needs them; bundling avoids an awkward intermediate state.

## Spec-revision additions (promoted in-scope per user direction)

The spec was extended after this plan's first draft. Three follow-ups previously listed under "Out of scope" are now in-scope, plus a routing instruction for the visual work and a new clarification.

### A. Per-category accent palette

Each tile carries a `data-category="<id>"` attribute (already specified in the renderer). Add a small palette mapped to the existing categories. Recommended hues, calibrated to read on the dark-navy panel:

| Category (data-category) | Accent (CSS var) | Hex sample | Rationale |
|---|---|---|---|
| `language` | `--cat-language` | `#12d640` (existing site green) | Languages are the spine of the resume; lean into the brand colour. |
| `framework` | `--cat-framework` | `#8b6dff` (violet) | Adjacent to language but distinct. |
| `database` / `apm` / `logging` | `--cat-data` | `#5ac8fa` (sky blue) | Data + observability share a family. |
| `cloud` / `infrastructure` | `--cat-infra` | `#b794f4` (lavender) | Infra-as-a-service feel. |
| `sourceControl` / `bugTracking` | `--cat-vcs` | `#ff9b54` (warm orange) | Tooling cluster. |
| `testing` | `--cat-testing` | `#e57373` (muted red) | Tests historically connote "stop / verify". |
| `messaging` | `--cat-messaging` | `#ffd54f` (amber) | Yellow-on-dark reads "in-flight". |
| `web` / `webApi` | `--cat-web` | `#ff7b9c` (coral pink) | Frontend cluster. |
| `design` | `--cat-design` | `#9fa8da` (indigo) | Architecture / pattern abstractions. |
| `tool` | `--cat-tool` | `#bdbdbd` (neutral grey) | Generic catch-all; stays muted. |

Apply via attribute selectors:
```css
.skills-tag[data-category="language"]      { --tag-accent: var(--cat-language); }
.skills-tag[data-category="framework"]     { --tag-accent: var(--cat-framework); }
.skills-tag[data-category="database"],
.skills-tag[data-category="apm"],
.skills-tag[data-category="logging"]       { --tag-accent: var(--cat-data); }
/* …etc */

.skills-tag {
  border-color: color-mix(in srgb, var(--tag-accent, #fff) 38%, transparent);
}
.skills-tag:hover {
  background: color-mix(in srgb, var(--tag-accent, #fff) 15%, transparent);
  border-color: var(--tag-accent, #fff);
}
.skills-tag--lg {
  background: color-mix(in srgb, var(--tag-accent, #fff) 10%, transparent);
}
```

`color-mix()` is supported in all modern browsers (Chrome 111+, Safari 16.2+, Firefox 113+). For older browser fallback, replace with literal `rgba()` per category — but the site is already using modern CSS (`object-fit`, CSS Grid, `text-decoration-thickness`) so `color-mix()` is consistent with the baseline.

The palette and the actual selector tuning are **owned by the frontend-design skill pass** (see §D below). Plan above is the data contract and starting palette.

### B. Certifications + Education coverage

The cloud's source set is now:
1. `window.resume.workRecent` (3 entries) — same as before
2. `window.resume.workOld` (5 entries) — same as before
3. `window.resume.certifications` (6 entries) — **new**
4. `window.resume.education` (2 entries) — **new**

Schema additions to `resume.js`:

Each cert and education entry gets an optional `skills: string[]` array listing the alias tokens that entry contributes to the cloud. Concrete suggested values (also part of the resume.js edit):

```js
// inside resume.js certifications:
{ name: "AZ-900", ..., skills: ["azure"] }                    // 2022, modern Azure
{ name: "M101N",  ..., skills: ["mongodb", "dotnetframework", "csharp"] }  // 2016, full framework era
{ name: "MCTS 70-511", ..., skills: ["dotnetframework", "csharp"] }        // .NET Framework 4 WinApps
{ name: "MCTS 70-516", ..., skills: ["dotnetframework", "csharp"] }        // .NET Framework 4 Data Access
{ name: "MCPD",    ..., skills: ["dotnetframework", "csharp"] }            // .NET Framework 4 era
{ name: "MCTS 70-515", ..., skills: ["dotnetframework", "csharp", "asp.net mvc"] }  // .NET Framework 4 Web

// inside resume.js education:
{ /* UPB BSc */, ..., skills: ["c++", "mfc", "matlab"] }      // from thesis footer
{ /* BPH high school */, ..., skills: [] }                    // no technical skills to surface
```

All six Microsoft certs target the **classic .NET Framework 4** generation (the unified .NET 5/6/8 didn't exist until 2020). Mapping them to `dotnetframework` rather than `dotnet` makes the skills cloud honest about what era the credential reflects.

Renderer change to `buildSkillsCloud()`:
```js
function buildSkillsCloud() {
    var counts = {};
    function bumpFromTokens(tokens) {
        if (!Array.isArray(tokens)) return;
        tokens.forEach(function (token) {
            var skill = matchSkill(token);
            if (skill) counts[skill.id] = (counts[skill.id] || 0) + 1;
        });
    }
    // work entries: each STACK_FIELD array
    [].concat(window.resume.workRecent || [], window.resume.workOld || [])
      .forEach(function (entry) {
          STACK_FIELDS.forEach(function (field) { bumpFromTokens(entry[field]); });
      });
    // certifications + education: the skills[] array
    [].concat(window.resume.certifications || [], window.resume.education || [])
      .forEach(function (entry) { bumpFromTokens(entry.skills); });
    // …filter, sort, return as before
}
```

skillsIndex additions to cover education's thesis tooling:
```js
{ id: "cpp",    label: "C++",    category: "language",
  aliases: ["c++"],
  logoUrl: "https://www.vectorlogo.zone/logos/isocpp/isocpp-icon.svg" },
{ id: "mfc",    label: "MFC",    category: "framework",
  aliases: ["mfc"], logoUrl: null },
{ id: "matlab", label: "MATLAB", category: "tool",
  aliases: ["matlab"],
  logoUrl: "https://www.vectorlogo.zone/logos/mathworks/mathworks-icon.svg" }
```

(Skip `bayesian`, `time series` — too abstract for a tag cloud; they live in the thesis description, not as skills.)

### C. Failover chain: vectorlogo → RemixIcon → BoxIcons → text

Per user direction, dropping straight from a failed `<img>` to text is too abrupt. Each skill entry can declare up to three visual sources, tried in priority order:

1. **Vectorlogo SVG** (`logoUrl`) — preferred, full-colour brand mark
2. **RemixIcon glyph** (`iconRemix`) — bundled in `assets/vendor/remixicon/remixicon.css`, ~2300 icons including many brand logos (`ri-microsoft-fill`, `ri-postgresql-fill`, `ri-github-fill`, `ri-react-fill`, …)
3. **BoxIcons logo glyph** (`iconBox`) — bundled in `assets/vendor/boxicons/css/boxicons.min.css`. The `bxl-*` collection covers brand logos (`bxl-postgresql`, `bxl-mongodb`, `bxl-redis`, `bxl-docker`, `bxl-kubernetes`, `bxl-microsoft`, `bxl-azure`, `bxl-aws`, `bxl-github`, `bxl-gitlab`, `bxl-git`, `bxl-jira`, `bxl-react`, `bxl-angular`, `bxl-bootstrap`, `bxl-html5`, `bxl-css3`, `bxl-sass`, `bxl-webpack`, …)
4. **Text-only** — strip the visual entirely; pill is just label + count

Both RemixIcon and BoxIcons are **already loaded** by the site (`index.html` `<head>`, lines 25–28), and both are used elsewhere in the codebase (e.g. `social.js` uses `bxl-linkedin`, `bxl-github`; `about.js` uses `ri-compass-fill`). No new vendor assets needed.

Revised entry shape:
```js
{
  id: "postgresql",
  label: "PostgreSQL",
  category: "database",
  aliases: ["postgresql"],
  logoUrl: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  iconRemix: null,                  // optional; e.g. "ri-postgresql-fill"
  iconBox: "bxl-postgresql"         // optional; full class incl. "bxl-" prefix
}
```

Failover semantics:
- Only the `<img>` from `logoUrl` can fail at runtime (404, network error). Icon fonts can't be programmatically tested for "missing glyph" — they either render or show a `□`. So failover only fires on `<img>` `onerror`.
- The renderer **picks one source at curation/render time** based on what's defined. Order: prefer `logoUrl` if set; fall back to `iconRemix` only on `<img>` error if defined; fall back to `iconBox` if remix not configured; finally text-only.
- A skill with no `logoUrl` but only `iconBox` skips the failover machinery and uses the BoxIcon directly from first render.

```js
function skillsTile(s) {
    var bucket = s.count >= 4 ? "lg" : (s.count >= 2 ? "md" : "sm");
    var tile = $("<span>")
        .addClass("skills-tag skills-tag--" + bucket)
        .attr("data-category", s.category)
        .attr("data-count", s.count);

    function appendIconFont(cls) {
        if (!cls) return false;
        tile.append($("<i>").addClass("skills-tag-glyph").addClass(cls));
        return true;
    }

    if (s.logoUrl) {
        var img = $("<img>")
            .addClass("skills-tag-logo")
            .attr("src", s.logoUrl)
            .attr("alt", "")
            .attr("loading", "lazy")
            .on("error", function () {
                $(this).remove();
                // failover chain: remix → box → text
                if (!appendIconFont(s.iconRemix) && !appendIconFont(s.iconBox)) {
                    tile.addClass("skills-tag--no-logo");
                }
            });
        tile.append(img);
    } else if (!appendIconFont(s.iconRemix) && !appendIconFont(s.iconBox)) {
        tile.addClass("skills-tag--no-logo");
    }

    tile.append($("<span>").addClass("skills-tag-label").text(s.label));
    if (s.count > 1) {
        tile.append($("<span>").addClass("skills-tag-count").text("×" + s.count));
    }
    return tile;
}
```

The `.skills-tag-glyph` class is a styling hook for the FE-design pass — it sizes the `<i>` to roughly match `.skills-tag-logo` (height ~14/18/22px by bucket), in the appropriate accent colour.

`.skills-tag--no-logo` remains a cosmetic hook for tiles that exhausted the failover chain.

### C.1. Suggested icon-font fallbacks for the starter index

Filling these into the curated entries makes the cloud robust to vectorlogo.zone outages. Suggested mappings (all confirmed against the BoxIcons / RemixIcon catalogues):

| skill id | iconRemix | iconBox |
|---|---|---|
| `csharp` | — | `bxl-c-plus-plus` (closest available — there's no dedicated bxl-csharp; consider `null`) |
| `dotnet` | `ri-microsoft-fill` | `bxl-microsoft` |
| `dotnetframework` | `ri-microsoft-fill` | `bxl-microsoft` |
| `aspnet` | — | `bxl-microsoft` |
| `aspnetcore` | — | `bxl-microsoft` |
| `postgresql` | `ri-database-2-line` | `bxl-postgresql` |
| `sqlserver` | — | `bxl-microsoft` |
| `mongodb` | — | `bxl-mongodb` |
| `redis` | — | `bxl-redis` |
| `cosmosdb` | — | `bxl-microsoft` |
| `azurestorage` | — | `bxl-microsoft` |
| `azure` | — | `bxl-microsoft` |
| `kubernetes` | — | `bxl-kubernetes` |
| `docker` | — | `bxl-docker` |
| `git` | — | `bxl-git` |
| `github` | `ri-github-fill` | `bxl-github` |
| `gitlab` | — | `bxl-gitlab` |
| `azuredevops` | — | `bxl-microsoft` |
| `bitbucket` | — | `bxl-bitbucket` |
| `jira` | — | `bxl-jira` |
| `react` | `ri-reactjs-fill` | `bxl-react` |
| `angular` | `ri-angularjs-fill` | `bxl-angular` |
| `bootstrap` | — | `bxl-bootstrap` |
| `html5` | `ri-html5-fill` | `bxl-html5` |
| `css3` | `ri-css3-fill` | `bxl-css3` |
| `sass` | `ri-sass-fill` | `bxl-sass` |
| `webpack` | — | `bxl-webpack` |
| `cpp` | — | `bxl-c-plus-plus` |

Entries not in this table either have no good icon-font equivalent (most testing frameworks, MassTransit, Serilog, Polly, etc.) — they'll fall through to text-only if the vectorlogo URL fails. That's acceptable; obscure libraries are fine as text pills.

### D. Execution model — frontend-design skill owns the visual layer

Per spec line 16 ("direct the plan you build to use frontend design skill from anthropic"), execution splits into two lanes:

**Lane 1: Data + plumbing (general-purpose agent or direct edits)**

1. Create `assets/js/skillsIndex.js` with the curated index (incl. additions in §B above).
2. Create `assets/js/skills.js` with `onSkills()`, `buildSkillsCloud()` walking 4 sources, `matchSkill()`, `skillsTile()` with the failover handler.
3. Edit `assets/js/resume.js`:
   - Three comma-split data fixes (existing in plan: Microsoft `distributed`, `storageData`, Collectius `language`).
   - Add `skills: [...]` arrays to all 6 `certifications` entries and the 2 `education` entries (§B).
4. Edit `index.html`:
   - Replace `<section id="skills">` body with `<div id="skillsCloud" class="skills-cloud" data-aos="fade-up"></div>`.
   - Add `id="skills-link"` to the nav `<li>`.
   - Add two `<script>` tags after `workExperienceOld.js`.

This lane ships a functional but **unstyled** (or minimally styled — using the inherited `.we-pill` shape) Skills section.

**Lane 2: Visual layer — `/frontend-design:frontend-design` invocation**

After Lane 1 is on disk, invoke the frontend-design skill with a brief like:

> "The Skills section now renders a data-driven tag cloud. Read `assets/js/skills.js` and `assets/js/skillsIndex.js` for the data contract. DOM is `#skillsCloud > .skills-tag[data-category=…][data-count=…].skills-tag--{sm|md|lg}` with optional `.skills-tag-logo`, `.skills-tag-label`, `.skills-tag-count` children. Style it: dark-navy panel, NO white backgrounds, per-category accent borders (palette in `spec-plan/260509-skills-plan.md` §A), 3-bucket size scale, hover lift, logo height ~14/18/22px by bucket. Match the editorial-grade aesthetic of passes 1–4."

The frontend-design skill owns:
- All `.skills-*` selectors and their `:hover` states
- The per-category palette (`--cat-*` variables on `:root`)
- The 3-bucket sizing (`.skills-tag--sm/md/lg`)
- The logo `<img>` styling (height clamp, drop-shadow if needed)
- Any cross-section CSS adjustments (e.g. tightening `#skills .container` padding for 1080p fit if needed)

This keeps the visual decisions in the same lane and same review path as the four prior FE-design passes — no aesthetic guesses bundled with the data plumbing.

### E. Updates to other plan sections (in light of A–D)

These supersede earlier text in this plan where they conflict:

- **§"Architectural decisions" #5** — flat cloud + per-category accent borders (instead of "no category coding"). Category-header decision deferred per the open clarification.
- **§"Architectural decisions" — adds**: failover is dynamic (not curation-time); cloud sources expand from 2 to 4 (workRecent + workOld + certifications + education).
- **§"New & modified files" — `assets/js/resume.js` row** — also adds optional `skills: string[]` to cert + education entries.
- **§"`assets/js/skills.js` — renderer algorithm"** — `buildSkillsCloud()` walks the 4 sources; `skillsTile()` carries the `onerror` handler and `.skills-tag--no-logo` hook.
- **§"`assets/js/skillsIndex.js` starter content"** — extend entry shape with optional `iconRemix` + `iconBox` fields per §C; append `cpp`, `mfc`, `matlab` entries; populate icon-font fallbacks per the table in §C.1.
- **§"Three small `resume.js` data fixes"** — retitle as "`resume.js` edits", add the `skills[]` additions to 6 cert + 2 education entries.
- **§"CSS — `.skills-*` namespace"** — note that this CSS is a starting point. The `/frontend-design:frontend-design` invocation (Lane 2 above) is the source of truth for the final styling.
- **§"Verification" — add checks**:
  - 11. **Cert + education contribution**: `dotnet` count rises by ~5 (cert M101N + 4 MCPD/MCTS), `azure` by 1 (AZ-900), `mongodb` by 1, `cpp`/`mfc`/`matlab` should each appear (count 1).
  - 12. **Failover smoke test**: temporarily change one `logoUrl` to a 404 path (e.g. `…/_does-not-exist.svg`) — that pill renders text-only, no broken-image icon. Revert.
  - 13. **Per-category accents**: visually inspect that `language` tiles have a green hint, `database` tiles have a blue hint, etc. — readable but not garish.
