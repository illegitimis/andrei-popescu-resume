/* skills index — authoritative source for the Skills tag cloud.
   Each entry maps a canonical skill to (a) the resume.js tokens that should
   roll up into it (via aliases[]), and (b) up to three visual sources tried
   in priority order: vectorlogo.zone SVG (logoUrl) → RemixIcon glyph
   (iconRemix) → BoxIcons glyph (iconBox) → text-only.

   Entry shape:
     { id, label, category, aliases: string[],
       logoUrl: string|null, iconRemix: string|null, iconBox: string|null }

   Tokens not in this index do NOT appear in the cloud. Curating this file is
   the lever for what surfaces. See spec-plan/260509-skills-plan.md for the
   full data contract and per-category palette. */

window.skillsIndex = [
  // === Languages ===
  {
    id: "csharp",
    label: "C#",
    category: "language",
    aliases: ["c# 7", "c# 7.1", "c# 7.2", "c# 7.3", "c# 9", "c# 10", "c# 12"],
    logoUrl: "https://www.vectorlogo.zone/logos/microsoft_csharp/microsoft_csharp-icon.svg",
    iconRemix: null,
    iconBox: null
  },
  {
    id: "cpp",
    label: "C++",
    category: "language",
    aliases: ["c++"],
    logoUrl: "https://www.vectorlogo.zone/logos/isocpp/isocpp-icon.svg",
    iconRemix: null,
    iconBox: "bxl-c-plus-plus"
  },

  // === Runtimes / Frameworks ===
  // Modern unified .NET (5+) + .NET Core (3.x predecessor) + .NET Standard (cross-target)
  {
    id: "dotnet",
    label: ".NET",
    category: "framework",
    aliases: ["net5.0", "net6.0", "net8.0", "netcore3.1", "netstandard2.1",
              ".net-standard2", ".net-core", ".net-core 2", "language-ext"],
    logoUrl: "https://www.vectorlogo.zone/logos/dotnetfoundation/dotnetfoundation-icon.svg",
    iconRemix: "ri-microsoft-fill",
    iconBox: "bxl-microsoft"
  },
  // Classic .NET Framework (1.x–4.8, Windows-only, pre-unification)
  {
    id: "dotnetframework",
    label: ".NET Framework",
    category: "framework",
    aliases: ["full framework 4.7.2"],
    logoUrl: "https://www.vectorlogo.zone/logos/dotnetfoundation/dotnetfoundation-icon.svg",
    iconRemix: "ri-microsoft-fill",
    iconBox: "bxl-microsoft"
  },
  // Classic ASP.NET MVC + Razor + EpiServer (full-framework era web stack)
  {
    id: "aspnet",
    label: "ASP.NET",
    category: "framework",
    aliases: ["asp.net mvc", "razor", "episerver"],
    logoUrl: null,
    iconRemix: null,
    iconBox: "bxl-microsoft"
  },
  // Modern ASP.NET Core (cross-platform web framework on top of .NET Core / .NET 5+)
  {
    id: "aspnetcore",
    label: "ASP.NET Core",
    category: "framework",
    aliases: ["asp.net-core", "asp.net-core 2.1", "asp.net-core 2.2"],
    logoUrl: null,
    iconRemix: null,
    iconBox: "bxl-microsoft"
  },
  // MFC — classic Microsoft Foundation Classes (C++ Windows GUI, education thesis era)
  {
    id: "mfc",
    label: "MFC",
    category: "framework",
    aliases: ["mfc"],
    logoUrl: null,
    iconRemix: null,
    iconBox: "bxl-microsoft"
  },

  // === Databases & Storage ===
  {
    id: "postgresql",
    label: "PostgreSQL",
    category: "database",
    aliases: ["postgresql"],
    logoUrl: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
    iconRemix: "ri-database-2-line",
    iconBox: "bxl-postgresql"
  },
  {
    id: "sqlserver",
    label: "SQL Server",
    category: "database",
    aliases: ["sql server", "sql server 2016", "tsql", "sqlgeometry", "dacpac"],
    logoUrl: "https://www.vectorlogo.zone/logos/microsoft_sqlserver/microsoft_sqlserver-icon.svg",
    iconRemix: null,
    iconBox: "bxl-microsoft"
  },
  {
    id: "mongodb",
    label: "MongoDB",
    category: "database",
    aliases: ["mongodb"],
    logoUrl: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    iconRemix: null,
    iconBox: "bxl-mongodb"
  },
  {
    id: "redis",
    label: "Redis",
    category: "database",
    aliases: ["redis"],
    logoUrl: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
    iconRemix: null,
    iconBox: "bxl-redis"
  },
  {
    id: "cosmosdb",
    label: "Cosmos DB",
    category: "database",
    aliases: ["cosmos db", "cosmosdb", "documentdb"],
    logoUrl: "https://www.vectorlogo.zone/logos/microsoft_azure_cosmosdb/microsoft_azure_cosmosdb-icon.svg",
    iconRemix: null,
    iconBox: "bxl-microsoft"
  },
  {
    id: "azurestorage",
    label: "Azure Storage",
    category: "database",
    aliases: ["table", "blob", "queue storage", "azure queues", "azure storage"],
    logoUrl: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
    iconRemix: null,
    iconBox: "bxl-microsoft"
  },
  {
    id: "kusto",
    label: "Kusto / KQL",
    category: "database",
    aliases: ["kusto", "kusto/kql"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "dapper",
    label: "Dapper",
    category: "database",
    aliases: ["dapper"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "ef",
    label: "EF / EF Core",
    category: "database",
    aliases: ["ef6", "ef core"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "dynamics",
    label: "Dynamics",
    category: "database",
    aliases: ["dynamics"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },

  // === Cloud / Infra ===
  {
    id: "azure",
    label: "Azure",
    category: "cloud",
    aliases: ["appinsights", "application insights", "azure eventhubs"],
    logoUrl: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
    iconRemix: null,
    iconBox: "bxl-microsoft"
  },
  {
    id: "kubernetes",
    label: "Kubernetes",
    category: "infrastructure",
    aliases: ["kubernetes"],
    logoUrl: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
    iconRemix: null,
    iconBox: "bxl-kubernetes"
  },
  {
    id: "docker",
    label: "Docker",
    category: "infrastructure",
    aliases: ["docker"],
    logoUrl: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
    iconRemix: null,
    iconBox: "bxl-docker"
  },
  {
    id: "servicefabric",
    label: "Service Fabric",
    category: "infrastructure",
    aliases: ["service fabric"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "orleans",
    label: "Orleans",
    category: "infrastructure",
    aliases: ["orleans"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "dapr",
    label: "Dapr",
    category: "infrastructure",
    aliases: ["dapr"],
    logoUrl: "https://www.vectorlogo.zone/logos/dapr_io/dapr_io-icon.svg",
    iconRemix: null,
    iconBox: null
  },
  {
    id: "kestrel",
    label: "Kestrel Edge",
    category: "infrastructure",
    aliases: ["kestrel edge"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "debian",
    label: "Debian",
    category: "infrastructure",
    aliases: ["debian 10"],
    logoUrl: "https://www.vectorlogo.zone/logos/debian/debian-icon.svg",
    iconRemix: null,
    iconBox: null
  },

  // === Source control / bug tracking ===
  {
    id: "git",
    label: "git",
    category: "sourceControl",
    aliases: ["git"],
    logoUrl: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    iconRemix: null,
    iconBox: "bxl-git"
  },
  {
    id: "github",
    label: "GitHub",
    category: "sourceControl",
    aliases: ["github"],
    logoUrl: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
    iconRemix: "ri-github-fill",
    iconBox: "bxl-github"
  },
  {
    id: "gitlab",
    label: "GitLab",
    category: "sourceControl",
    aliases: ["gitlab"],
    logoUrl: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg",
    iconRemix: null,
    iconBox: "bxl-gitlab"
  },
  {
    id: "azuredevops",
    label: "Azure DevOps",
    category: "sourceControl",
    aliases: ["azure repos", "azure devops", "vsts", "azure pipelines", "boards", "azure ci/cd", "pipelines"],
    logoUrl: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
    iconRemix: null,
    iconBox: "bxl-microsoft"
  },
  {
    id: "bitbucket",
    label: "Bitbucket",
    category: "sourceControl",
    aliases: ["bitbucket"],
    logoUrl: "https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg",
    iconRemix: null,
    iconBox: "bxl-bitbucket"
  },
  {
    id: "jira",
    label: "Jira",
    category: "bugTracking",
    aliases: ["jira", "jira nextgen"],
    logoUrl: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",
    iconRemix: null,
    iconBox: "bxl-jira"
  },
  {
    id: "confluence",
    label: "Confluence",
    category: "bugTracking",
    aliases: ["confluence"],
    logoUrl: "https://www.vectorlogo.zone/logos/atlassian_confluence/atlassian_confluence-icon.svg",
    iconRemix: null,
    iconBox: null
  },
  {
    id: "markdown",
    label: "Markdown",
    category: "tool",
    aliases: ["markdown"],
    logoUrl: "https://www.vectorlogo.zone/logos/markdown/markdown-icon.svg",
    iconRemix: null,
    iconBox: null
  },

  // === Testing ===
  {
    id: "xunit",
    label: "xUnit",
    category: "testing",
    aliases: ["xunit"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "nunit",
    label: "NUnit",
    category: "testing",
    aliases: ["nunit"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "mstest",
    label: "MSTest",
    category: "testing",
    aliases: ["mstest", "mstest/fluentassertions"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "fluentassertions",
    label: "FluentAssertions",
    category: "testing",
    aliases: ["fluentassertions"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "moq",
    label: "Moq",
    category: "testing",
    aliases: ["moq"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "nsubstitute",
    label: "NSubstitute",
    category: "testing",
    aliases: ["nsubstitute"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "nfluent",
    label: "NFluent",
    category: "testing",
    aliases: ["nfluent"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "altcover",
    label: "AltCover",
    category: "testing",
    aliases: ["altcover"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "ioabstractions",
    label: "IO.Abstractions",
    category: "testing",
    aliases: ["io abstractions", "io.abstractions"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },

  // === Messaging ===
  {
    id: "rabbitmq",
    label: "RabbitMQ",
    category: "messaging",
    aliases: ["rabbitmq", "rawrabbit"],
    logoUrl: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
    iconRemix: null,
    iconBox: null
  },
  {
    id: "masstransit",
    label: "MassTransit",
    category: "messaging",
    aliases: ["masstransit"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "nats",
    label: "NATS",
    category: "messaging",
    aliases: ["nats"],
    logoUrl: "https://www.vectorlogo.zone/logos/nats_io/nats_io-icon.svg",
    iconRemix: null,
    iconBox: null
  },
  {
    id: "neventstore",
    label: "NEventStore",
    category: "messaging",
    aliases: ["neventstore"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },

  // === Observability / APM ===
  {
    id: "serilog",
    label: "Serilog",
    category: "logging",
    aliases: ["serilog"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "elastic",
    label: "Elasticsearch",
    category: "apm",
    aliases: ["elastic search", "elasticsearch"],
    logoUrl: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
    iconRemix: null,
    iconBox: null
  },
  {
    id: "kibana",
    label: "Kibana",
    category: "apm",
    aliases: ["kibana"],
    logoUrl: "https://www.vectorlogo.zone/logos/elastic_kibana/elastic_kibana-icon.svg",
    iconRemix: null,
    iconBox: null
  },
  {
    id: "logstash",
    label: "Logstash",
    category: "apm",
    aliases: ["logstash"],
    logoUrl: "https://www.vectorlogo.zone/logos/elastic_logstash/elastic_logstash-icon.svg",
    iconRemix: null,
    iconBox: null
  },
  {
    id: "prometheus",
    label: "Prometheus",
    category: "apm",
    aliases: ["prometheus"],
    logoUrl: "https://www.vectorlogo.zone/logos/prometheus_io/prometheus_io-icon.svg",
    iconRemix: null,
    iconBox: null
  },

  // === Web / Frontend ===
  {
    id: "angular",
    label: "Angular",
    category: "web",
    aliases: ["angular [2-4]", "angular 7", "angular material 7.2", "prime ng"],
    logoUrl: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
    iconRemix: "ri-angularjs-fill",
    iconBox: "bxl-angular"
  },
  {
    id: "react",
    label: "React",
    category: "web",
    aliases: ["react"],
    logoUrl: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    iconRemix: "ri-reactjs-fill",
    iconBox: "bxl-react"
  },
  {
    id: "bootstrap",
    label: "Bootstrap",
    category: "web",
    aliases: ["bootstrap"],
    logoUrl: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
    iconRemix: null,
    iconBox: "bxl-bootstrap"
  },
  {
    id: "html5",
    label: "HTML5",
    category: "web",
    aliases: ["html5"],
    logoUrl: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
    iconRemix: "ri-html5-fill",
    iconBox: "bxl-html5"
  },
  {
    id: "css3",
    label: "CSS3",
    category: "web",
    aliases: ["css3"],
    logoUrl: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    iconRemix: "ri-css3-fill",
    iconBox: "bxl-css3"
  },
  {
    id: "sass",
    label: "Sass",
    category: "web",
    aliases: ["scss", "sass"],
    logoUrl: "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg",
    iconRemix: "ri-sass-fill",
    iconBox: "bxl-sass"
  },
  {
    id: "webpack",
    label: "Webpack",
    category: "web",
    aliases: ["webpack"],
    logoUrl: "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg",
    iconRemix: null,
    iconBox: "bxl-webpack"
  },
  {
    id: "karma",
    label: "Karma",
    category: "web",
    aliases: ["karma"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "jasmine",
    label: "Jasmine",
    category: "web",
    aliases: ["jasmine"],
    logoUrl: "https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg",
    iconRemix: null,
    iconBox: null
  },

  // === Web APIs / Patterns ===
  {
    id: "swagger",
    label: "Swagger",
    category: "webApi",
    aliases: ["swaggerui", "autorest"],
    logoUrl: "https://www.vectorlogo.zone/logos/swagger/swagger-icon.svg",
    iconRemix: null,
    iconBox: null
  },
  {
    id: "automapper",
    label: "AutoMapper",
    category: "webApi",
    aliases: ["automapper"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "fluentvalidation",
    label: "FluentValidation",
    category: "webApi",
    aliases: ["fluentvalidation"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "microservices",
    label: "microservices",
    category: "design",
    aliases: ["microservices"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },

  // === Architecture ===
  {
    id: "ddd",
    label: "DDD",
    category: "design",
    aliases: ["ddd"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "cqrs",
    label: "CQRS",
    category: "design",
    aliases: ["cqrs"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "mediatr",
    label: "MediatR",
    category: "design",
    aliases: ["mediatr"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "dryioc",
    label: "DryIoC",
    category: "design",
    aliases: ["dryioc"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "autofac",
    label: "Autofac",
    category: "design",
    aliases: ["autofac"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },

  // === Tools / Misc ===
  {
    id: "polly",
    label: "Polly",
    category: "tool",
    aliases: ["polly"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "flurl",
    label: "Flurl",
    category: "tool",
    aliases: ["flurl"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "nodatime",
    label: "NodaTime",
    category: "tool",
    aliases: ["nodatime"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "resharper",
    label: "ReSharper",
    category: "tool",
    aliases: ["resharper"],
    logoUrl: "https://www.vectorlogo.zone/logos/jetbrains_resharper/jetbrains_resharper-icon.svg",
    iconRemix: null,
    iconBox: null
  },
  {
    id: "healthchecks",
    label: "HealthChecks",
    category: "tool",
    aliases: ["healthchecks"],
    logoUrl: null,
    iconRemix: null,
    iconBox: null
  },
  {
    id: "matlab",
    label: "MATLAB",
    category: "tool",
    aliases: ["matlab"],
    logoUrl: "https://www.vectorlogo.zone/logos/mathworks/mathworks-icon.svg",
    iconRemix: null,
    iconBox: null
  }
];
