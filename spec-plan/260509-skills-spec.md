current Skills Section has inline content from rajaprerak.github.io template.
instead i want you to semantically lookup programming languages, database types, SDKs, frameworks, architecture concepts, tools, source control and bug trackers in @assets\js\resume.js and create a new tag cloud like component by matching tag cloud semantic categories to 'www.vectorlogo.zone' logos, i.e <img src="https://www.vectorlogo.zone/logos/python/python-horizontal.svg" alt="vectorlogo.zone"> for python.
have these tags indexed for reuse and use the semantic index as the authoritative source of truth for the tag cloud.

also take into account number of occurences for the tag cloud, as to correctly bring forth proficency for a tag.
coalesce similar entries into one top level category, i.e:
- net5.0, net6.0, net8.0, ".net-standard2" into `dotnet`
- "c# 9" and "c# 12" into C#

use the dark-navy, green-accent look and feel, don't like the current white background of the skills section, nor the white background of vectorlogo images

---

use the same lazy loading DOM decoration consistent with other sections.
index.html just defines the schema, a js script should read the semantic tag cloud index and popilate the tag cloud
direct the plan you build to use frontend design skill from anthropic