$(document).ready(function () {
    var resume = {
        h1: "Andrei Ciprian Popescu",
        profile: "I started in the software industry as a C++ developer and began a love affair with .NET more than ten years ago. It is still ongoing and growing, especially now with rise of net core and single .NET. I am a certified Microsoft professional strong recently with web APIs and backends, with a constant focus on clean code, SOLID principles, enterprise and design patterns. To complement that experience I have had my share of distributed systems and web frontends. I am married to Aurora, hence the picture on the left. I play tennis.",
        highlights: [
            ".NET Developer with 17+ years industry experience",
            "BSc in Computer Science from UPB in 2007",
            "Continuous learner",
            "Certified Professional",
            "Husband / Father"
        ],
        highlightsOld: [
            "Team Lead",
            "Clean Coder",
            "TDD practitioner",
            "Distributed systems",
            "enthusiast",
            "Full Stack developer",
            "Volunteer"
        ],
        details: {
            birthDate: "1983-05-22",
            age: 42,
            home: "Bucharest",
            country: "Romania"
        },
        contact: {
            telephone: "+40 721 259 350",
            email: ["acpopescu@outlook.com", "andrei.ciprian@gmail.com"]
        },
        developer: {
            stackoverflow: "https://stackoverflow.com/users/2239678/andrei-ciprian",
            github: "https://github.com/illegitimis",
            linkedin: "https://www.linkedin.com/in/andrei-ciprian-popescu",
            outlook: "mailto:acpopescu@outlook.com",
            google: "mailto:andrei.ciprian@gmail.com",
        },
        languages: [
            {
                code: "en",
                lang: "English",
                level: "C1"
            },
            {
                code: "ro",
                lang: "Romanian",
                level: "C2"
            },
            {
                code: "fr",
                lang: "French",
                level: "A2"
            },
            {
                code: "de",
                lang: "German",
                level: "A2"
            },
            {
                code: "es",
                lang: "Spanish",
                level: "A1"
            },
            {
                code: "it",
                lang: "Italian",
                level: "A1"
            }
        ],
        education: [
            {
                img: "UPB.png", // 336x339
                school: {
                    name: "University POLITEHNICA of Bucharest",
                    site: "https://upb.ro/en/",
                    where: "Bucharest, Romania"
                },
                when: {
                    start: "2002",
                    end: "2007",
                },
                degree: "BSc",
                grade: "8.0",
                department: {
                    name: "Computer Science and Engineering",
                    site: "https://cs.pub.ro/"
                },
                footer: [
                    "Thesis: Stochastic analysis of a singles tennis match. Determine real odds using time series analysis and a Bayesian model over ATP web collected data. C++ with a MFC user interface, Matlab C compiler for various algorithms implementations.",
                    "Major: Application programming.",
                    "System: pre-Bologna, 5 years of study."
                ],
                skills: ["c++", "mfc", "matlab"]
            },
            {
                img: "Sigla-BPH-fundal-trasnparent.gif", // Intrinsic size:	1368 × 1410 px
                img2: "CN_BPH_BZ.png", // 202x300
                school: {
                    name: "Bogdan Petriceicu Hașdeu National College",
                    site: "https://www.bphasdeu.ro/",
                    where: "Buzău, Romania"
                },
                when: {
                    start: "1998",
                    end: "2002",
                },
                degree: "High school",
                grade: "9.35",
                baccalaureate: "9.82",
                footer: [
                    "A participant in the 1998 and 1999 National Math Olympiads in Alba Iulia & Braşov as a 9th/10th grader.",
                    "Mathematics, Physics, intensive English language program."
                ],
                skills: []
            }
        ],
        certifications: [
            {
              name: "AZ-900",
              description: "Microsoft Certified Azure Fundamentals",
              date: "December 7, 2022",
              comment: "Certification #I514-2902",
              img: "microsoft-certified-fundamentals-badge.svg",
              alt: "Microsoft Certified Azure Fundamentals",
              link: "https://learn.microsoft.com/api/credentials/share/en-us/AndreiPopescu-9861/64FCBE2ECFEB1F7A?sharingId=117D207F790387C",
              pdf: "64fcbe2ecfeb1f7a.pdf",
              skills: ["azure"]
            },
            {
              name: "M101N",
              description: "MongoDB for .NET Developers",
              date: "February 23, 2016",
              img: "OIP.webp",
              alt: "mongodb university",
              exam: "https://university.mongodb.com/courses/M101N/about",
              link: "",
              skills: ["mongodb", "dotnetframework", "csharp"]
            },
            {
              name: "MCTS 70-511",
              description: "Windows Applications Development with Microsoft .NET Framework 4",
              date: "November 28, 2014",
              comment: "Score 935/1000",
              img: "MCTS.511.winapps.160x137.png",
              alt: "MCTS 70-511",
              exam: "https://www.microsoft.com/learning/en-us/exam-70-511.aspx",
              pdf: "9TA08B-CC30C5.pdf",
              skills: ["dotnetframework", "csharp"]
            },
            {
              name: "MCTS 70-516",
              description: "Accessing Data with Microsoft .NET Framework 4",
              date: "September 26, 2014",
              comment: "Score 838/1000",
              img: "MCTS.516.dataaccess.311x267.png",
              alt: "MCTS 70-516",
              exam: "https://www.microsoft.com/learning/en-us/exam-70-516.aspx",
              pdf: "A1842V-958536.pdf",
              skills: ["dotnetframework", "csharp"]
            },
            {
              name: "MCPD",
              description: "Microsoft Certified Professional Developer",
              date: "April 16, 2012",
              comment: "Awarded with previous certification.",
              img: "mcpd.logo.265.150.PNG",
              alt: "MCPD",
              pdf: "1P45B5-35B4BE.pdf",
              skills: ["dotnetframework", "csharp"]
            },
            {
              name: "MCTS 70-515",
              description: "Web Applications Development with Microsoft .NET Framework 4",
              date: "November 08, 2011",
              comment: "Score 838/1000",
              img: "mcts.logo.266.147.PNG",
              alt: "MCTS 70-515",
              exam: "https://www.microsoft.com/learning/en-us/exam-70-515.aspx",
              pdf: "4DF77I-FF3FE1.pdf",
              skills: ["dotnetframework", "csharp", "asp.net mvc"]
            }
          ],
        // recent work experience (Genos onward, last 5 years)
        workRecent: [
            {
                company: "Edgeless",
                position: "Principal .NET Engineer, Team Lead",
                collaboration: "project outsourcing @ ProUnity, HeadFirst Group",
                business: "workforce supply and demand",
                siteUrl: "https://www.pro-unity.com/",
                startDate: "June 2025",
                endDate: "present",
                ai: ["Adopted a full agentic code production workflow starting February 2026.", "Claude", "Cursor", "Ollama", "tested local SLMs", "Dropped Github Copilot", "Personal preference: spec driven workflow with obra/superpowers."],
                description: "Joined as principal, moved into a engineering team lead role for the talent acquisition team with the group private equity buyout.Transformed into a full-stack software engineer along the way so as to support the company's push to an agentic first development workflow. Utilized tools like Claude, Cursor, GitHub Copilot. Assessed, promoted spec-driven frameworks. Added bespoke skills. Improved token usage and LLM session context relevance via knowledge graph/wiki. Delivered production features leveraging a .NET 9 / ASP.NET Core (C#) backend paired with an Angular frontend, complemented by SQL Server and Azure CosmosDB for audit logs, and Azure Functions for sending emails. Integrated Azure OpenAI with SemanticKernel for AI-driven CV parsing and candidate matching/comparison, while enhancing Angular on-boarding flows to pre-fill candidate profiles from AI extraction results. Led the migration from .NET 8 to .NET 9, updating project configurations, CI YAML pipelines, and optimizing EF Core 9 queries. Systematically removed dead code and redundant dependencies, enhancing maintainability and reducing coupling. Managed / consolidated work across Azure Git Repos for legacy systems and GitHub Enterprise for new development. Developed and maintained Azure DevOps YAML pipelines and new GitHub Actions workflows for the .NET 9 cycle. Standardized local developer environments using Docker Compose and managed worker service Dockerfiles. Promoted a sprint-based Agile model with Jira best practices and improved long-term code base health through expanded unit test coverage and architecture fitness tests. Conducted dotnet Aspire research. Adoption of Docker for local builds and Terraform for infrastructure management was decided.",
                language: ["c# 13","net9.0","typescript","Angular 20"],
                database: ["SQL Server","EFCore","blob","table storage","CosmosDb"],
                tests: ["NUnit","Coverlet","test coverage improvements"],
                src: ["Azure Git Repos","Github Enterprise"],
                trk: ["Azure Boards","Jira"],
                cicd: ["Github Actions", "Azure Pipelines"],
                design: ["DDD", "CQRS"],
                log: ["OTEL", "AppInsights"]
            },
            {
                company: "Microsoft",
                position: "Software Engineer II",
                collaboration: "full time employee / individual contributor",
                business: "Azure Core / internal cloud infrastructure",
                siteUrl: "https://www.microsoft.com/",
                startDate: "July 2022",
                endDate: "May 2025",
                description: "Geneva Actions(GA) is an internal ring 0 cloud service offering a .NET sandbox to first parties, allowing maintenance and tuneup of their infrastructure. My on-boarding project was to improve transparency and reaction to ill performing extensions, involving data analysis, classification of issues into problem categories, owner notification and reactions like circuit breaker or throttling. Improved test coverage and performance in foundational parts of the application. 2023 consisted in the implementation of SDP safe deployment practices, allowing deployment and orchestration of a single package across regional environments. Minor frontend work with knockout.js. Made several proposals to improve the status quo: use CQRS for SDP orchestration, adopt onion architecture and improve project dependencies. In 2024 I planned porting GA as a whole to .NET8 and implemented parts of the migration. Massive hardening of the package publish process. 2025 consisted of on call rotation adoption and porting dSTS based auth to new .NET and MSAL v2, including the C# SDK codegen refactoring from autorest to NSwag.",
                language: ["c# 12", "full framework 4.7.2", "net6.0", "net8.0"],
                database: ["Table", "Blob", "Queue storage", "Redis", "Kusto"],
                tests: ["MSTest", "FluentAssertions", "improve test coverage"],
                src: ["Azure Repos"],
                trk: ["Azure Boards"],
                cicd: ["ARM", "Azure Pipelines"],
                misc: ["Service Fabric", "Kubernetes", "Orleans", "dapr"],
                log: ["msft ext abstractions", "Kusto"],
                design: ["distributed"],
                ai: ["Github Copilot"]
            },
            {
                company: "Collectius",
                position: "Senior C# Developer",
                collaboration: "consultancy",
                business: "banking, NPL",
                siteUrl: "https://www.collectius.com/",
                startDate: "September 2021",
                endDate: "June 2022",
                description: "The company is buying loans from several banks in South East Asia and provides an online platform where customers can manage their debt. I am a member of a 6 man team doing mainly backend work. I have developed several Rest APIs in the effort to connect public facing endpoints and become cloud native, but also cater for various needs of internal departments, moving from `pen and paper` to web services. I am assisting with devops, namely build pipelines for APIs and functions. BFF/API gateway based on Yarp. Implemented implicit, service and OBO auth flows with AAD. Pdf and docx document generation based on dynamic html tmplates, scryber and Open XML. Designed an event sourcing system for the approval of various workflows within the company. Azure V4 out of process/isolated functions. Implemented a scheduling system based on Hangfire and custom xml configuration / background jobs.",
                language: ["c# 9", "c# 10", "net5.0", "net6.0"],
                database: ["PostgreSQL", "SQL Server", "Dapper", "Dynamics"],
                tests: ["xUnit", "Azure Pipelines coverage"],
                src: ["Azure Repos", "GitHub"],
                trk: ["GitHub Projects"],
                messaging: ["Nats", "NEventStore", "Azure Queues"],
                cicd: ["Azure Pipelines", "Docker"],
                log: ["Serilog", "PostgreSQL", "Application Insights"]
            },
            {
                company: "Genos",
                position: "Senior Software Engineer",
                collaboration: "outsourced @ LMS365",
                business: "learning platforms",
                siteUrl: "https://www.lms365.com/",
                startDate: "June 2021",
                endDate: "August 2021",
                description: "During my very short stay with the company, I switched security to API keys from basic authentication. I also assessed a move from ASP.NET with full framework, first to the new csproj package reference format, then porting to netcore. Added new screens to the web React frontend."
            }
        ],
        // older work experience (Qualysoft and earlier)
        workOld: [
            {
                company: "Qualysoft",
                position: "Team Lead & Architect",
                collaboration: "project outsourcing @ EvoGps",
                business: "telecom, IoT",
                siteUrl: "https://www.qualysoft.com/de",
                startDate: "May 2019",
                endDate: "May 2021",
                description: "I lead a team of three developers re-engineering the EvoGps fleet management solution. Built a distributed system to replace the existing monolithic architecture which reached storage limitations and had performance issues. I conducted technical interviews for C#/.Net positions within the company, ande built a development team for this project. I had the freedom to design an open source micro-services architecture with all the constituting frameworks and persistence options. A series of rest APIs handle bidirectional TCP communication with GPRS devices. Further layers of the system parse and process device data for various vendors and equipment types. In the end, processed data is persisted into a SQL database. Deployment is done on premises with a set of scripts on top of systemd, a sort of poor man's CD developed ad-hoc. Health checks have been added for all infrastructure dependencies. Semantic logging and monitoring are first class concerns. A multitude of metrics is gathered to monitor overall application performance. Traceability is end to end. A custom command bus has been built on top of the popular MassTransit framework. Abide by proven enterprise message queue patterns and practices are. Also, tons of other cool open-source libraries. Focus on APM",
                language: ["c# 7.3", "netcore3.1", "netstandard2.1"],
                log: ["Serilog", "healthchecks", "Elastic Search", "Kibana", "Logstash", "Prometheus"],
                database: ["MongoDB", "SQL Server 2016", "Redis", "Dapper"],
                tests: ["xUnit", "Moq", "AltCover", "ReportGenerator"],
                src: ["GitLab"],
                trk: ["Jira NextGen", "Confluence", "Markdown"],
                messaging: ["IO Pipelines", "RabbitMQ", "MassTransit", "RawRabbit"],
                cicd: ["bash", "virtual machines","Docker"],
                misc: ["Kestrel Edge", "Debian 10","Polly", "IO Abstractions", "NodaTime"]
            },
            {
                company: "Qualysoft",
                position: "Senior Engineer",
                collaboration: "outsourced @ Hoist Finance",
                business: "finance",
                siteUrl: "https://www.qualysoft.com/de",
                startDate: "January 2019",
                endDate: "July 2020",
                description: "Hoist Finance is a trusted debt restructuring partner to international banks and financial institutions. Handling non-performing loans and supporting individuals in becoming debt free is done via a portal which integrates several downstream web APIs. These APIs are Hoist debt collection platforms in Germany and Spain, and partner REST APIs in France and Poland. Part of a mainly Polish development team. Focus on clean code and high unit test coverage. Client decided to move development completely to India.",
                language: ["c# 7.3", "asp.net-core 2.2", ".net-standard2", "language-ext"],
                tests: ["XUnit", "NSubstitute", "NFluent", "xbehave", "IO.Abstractions"],
                database: ["postgresql"],
                web: ["asp.net mvc", "razor", "episerver"],
                src: ["Azure Git Repos"],
                trk: ["Azure Boards", "Jira", "Confluence"],
                cicd: ["Azure Pipelines"],
                misc: ["Autofac", "Flurl", "ReSharper"]
            },
            {
                company: "Endava",
                position: "Senior Engineer",
                collaboration: "outsourced @ Royal Mail Group",
                business: "mailing industry",
                siteUrl: "http://www.endava.com/en",
                startDate: "March 2018",
                endDate: "January 2019",
                description: "Complex mail operator management project consisting of an Angular GUI on top of several AspNetCore 2.1 APIs and a Sql Server database. Seven Agile development teams in two cities with six up to eight developers in each team. Angular version was incremented from 4 to 7 from development start until delivery. Clean architecture with domain driven design and command query request segregation with MediatR. Database first EF6 with dacpac package publishing instead of migrations. Highlights of my contribution to the project: implement custom authorization and authentication on top of client AD, performance optimization of EF queries and database related services, one of the few able to write karma unit tests, also one of the few constant backend tdd practitioners, designed algorithms to generate constrained map location points, enforced solid design practices and refactored convoluted areas of the application. After project delivery, during my final days with Endava, I prototyped several AD query/metadata search piggyback services in the company's effort to alleviate and standardize the interview process. These APIs were used by an Angular material website.",
                language: ["c# 7.2", "asp.net-core 2.1", ".net-core 2"],
                design: ["DDD", "CQRS", "MediatR", "DryIoC"],
                web: ["SPA", "angular 7", "Prime NG", "scss", "css3", "html5", "karma", "jasmine", "angular material 7.2"],
                log: ["Serilog"],
                database: ["Sql Server", "EF6", "tsql", "SqlGeometry", "dacpac"],
                tests: ["NUnit", "NSubstitute"],
                src: ["git", "vsts", "bitbucket"],
                trk: ["Jira"]
            },
            {
                company: "Endava",
                position: "Senior Engineer",
                collaboration: "extended team @ eShopWorld",
                business: "online shops",
                siteUrl: "http://www.endava.com/en",
                startDate: "June 2017",
                endDate: "February 2018",
                description: "Personnel outsourcing. Member of several development teams doing Scrum. Working remotely together with existing teams based in Dublin, then Newry. Developed an Angular portal on top of several AspNetCore web APIs as part of the shipping portal team. I have also delivered a complete micro-service with a CosmosDb over DocumentDb database, covering all development lifecycle stages, envisioning to documentation. Its responsibility was site features configuration per client, language, currency, and country. As a member of the checkout team, we participated in the initial design of the product.",
                language: ["c# 7.1", "asp.net-core", ".net-core","typescript","angular [2-4]"],
                web: ["Karma", "Jasmine", "Webpack", "Bootstrap", "Flex", "scss", "i18n"],
                misc: ["Swagger", "AutoRest", "AutoMapper", "FluentValidation"],
                design: ["microservices"],
                database: ["EF core", "tsql", "CosmosDb", "DocumentDb"],
                tests: ["XUnit", "FluentAssertions"],
                src: ["vsts", "git"],
                trk: ["confluence", "Jira"],
                log: ["AppInsights"],
                messaging: ["Azure EventHubs"]
            },
            {
                company: "BullGuard",
                position: "Senior C# Developer",
                collaboration: "in-house product",
                business: "antivirus software",
                siteUrl: "https://www.bullguard.com/",
                startDate: "March 2017",
                endDate: "May 2017",
                description: "During my very short span there I tried to refactor the existing DAL with nhibernate & fluentnhibernate in the company's failed effort to move from a monolith to a micro-services architecture."
            },
            {
                company: "CGS Inc",
                position: "Senior C# Developer",
                collaboration: "in-house product",
                business: "fashion ERP",
                siteUrl: "",
                startDate: "May 2015",
                endDate: "February 2017",
                description: "Member of the BlueCherry ERP team. I have written from scratch: a WCF rest image service with Mongo cache; a mupdf based pdf/ai to image rendering library with Managed C++, after evaluating several commercial pdf rendering APIs; a Hangfire based scheduling framework to replace existing FoxPro services and a ASP.NET MVC 5 site to configure such tasks, Mongo backend; Data pipeline exposing enterprise SQL Server data to PowerBI.",
                language: ["c# 5"],
                database: ["Sql Server","tsql","Mongo DB","GridFS"],
                src: ["TFS"],
                web: ["asp.net-mvc-5"],
                misc: ["WPF","WCF","Hangfire","MPI","Moebius","Apache Spark","Power BI"]
            },
            {
                company: "Libra Internet Bank",
                position: "IT Development Manager",
                collaboration: "in-house product",
                business: "banking",
                siteUrl: "",
                startDate: "February 2015",
                endDate: "May 2015",
                description: "I lead a development team of 2 to 4 people developing a desktop application for bank branches internal usage. I estimated development times, planned enhancements to the IBS desktop application, managed colleagues."
            },
            {
                company: "Ecrion",
                position: "C# senior developer",
                collaboration: "outsourced @ BAInsight",
                business: "enterprise document management",
                siteUrl: "",
                startDate: "July 2012",
                endDate: "August 2014",
                description: "I worked for the Longitude Search, Preview and Connector Framework teams building custom solutions for SharePoint. For the Search team I have designed, developed, and documented a series of WCF services for content enrichment/data mining using custom APIs like Pingar, or Lucene. I have also designed and coded a façade for integrating multiple enrichment services into a single deployment. Completed a standalone, SharePoint decoupled, asynchronous enrichment WCF data service, a mediator between a local Solr instance and a SharePoint farm. For the Preview team I have designed and implemented document conversion from Visio, OneNote, and Dita to html. I also ported existing functionality from Java assemblies like Saxon, Xalan or Fop. I refactored several areas of the product by enforcing design patterns and reviewed junior developers’ code."
            },
            {
                company: "BelerSoft",
                position: "C# developer",
                collaboration: "outsourced @ Amelkis",
                business: "finance, accounting",
                siteUrl: "",
                startDate: "October 2011",
                endDate: "June 2012",
                description: "My first .NET job. I was a member of the Opera team that developed a C# 2.0 accounting expertise ERP whose sole beneficiary is the French company Amelkis. I provided maintenance, designed new features, and refactored code. My work there consisted of intensive use of SQL Server 2008/TSQL, database design, ADO.NET custom code, Windows Forms and Crystal Reports on the side."
            },
            {
                company: "Graitec",
                position: "C++ developer",
                collaboration: "in-house product suite",
                business: "civil engineering",
                siteUrl: "",
                startDate: "July 2006",
                endDate: "April 2010",
                description: "Graitec produces software for the civil engineering industry. Member of the Advance Design & Effel teams. My contribution includes automatic report generation, rtf engine maintenance and development, application localization and internationalization, developing graphical user interfaces, building a unit and integration test framework, MSOffice automation. I have been working extensively with XML and MFC. I have also refined shape morphing algorithms for the 2D mesh process and used applied calculus techniques to compute integrals for the section engine."
            }
        ],
    }; // end of resume

    $("#h1-a-name").text(resume.h1);

    // add developer links to the page
    // localStorage.setItem('pac-resume', JSON.stringify(resume));
    window.resume = resume;
});