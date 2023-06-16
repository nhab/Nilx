var json1=`{
    "topics":[`;
    
json1+=`{"title":"Featured resources"
,"topic":
        [
            {"caption":"For proffesionals books","href":"https://www.goalkicker.com/"},
            {"caption":"Windows Apps list","href":"https://github.com/Awesome-Windows/Awesome#utilities"}
     ]
     }`;
json1+=`,{"title":"Software Eng"
,"topic":
        [
            {"caption":"Solid","href":"https://nhab.github.io/programming/solid.htm"}
            ,{"caption":"Agile","href":"Topics/softwareEngineering/agile.htm"}
            ,{"caption":"DevOps","href":"Topics/softwareEngineering/devops.htm"}
            ,{"caption":"Scrum","href":"Topics/softwareEngineering/scrum.htm"}
            ,{"caption":"Jira","href":"programming/topics/jira.htm"}
            ,{"caption":"Design patterns","href":"programming/design/designpatterns.htm"}
            ,{"caption":"change management","href":"https://www.google.com/search?q=K%C3%BCbler-Ross%20change%20management%20framework&ie=utf-8&oe=utf-8&client=firefox-b-1-m"}
            ,{"caption":"Refactoring","href":"programming/dotnet/refactoring.htm"}
            ,{"caption":"Transaction Acid properties","href":"Topics/softwareEngineering/transactionacid.htm"}
            ,{"caption":"Grasp","href":"Topics/softwareEngineering/grasp.htm"}
            ,{"caption":"Class diagram relationships","href":"Topics/softwareEngineering/classdiagramrelations.htm"}
            ,{"caption":"Algorithms and Data structures","href":"programming/algods.htm"}
            ,{"caption":"leetcode challenges and solutins","href":"programming/leetcode.htm"}
        ]
    }
    `;
json1+=`,{"title":"Software Architect"
,"topic":
        [
            {"caption":"DDD","href":"programming/design/ddd.htm"}
            ,{"caption":"BDD","href":"programming/architecture/bdd.htm"}
            ,{"caption":"Cleanarchitect","href":"https://youtu.be/dK4Yb6-LxAk"}
            ,{"caption":"Clean code manifesto","href":"programming/cleancode.htm"}
            ,{"caption":"Abp Steps","href":"programming/design/abpsteps.htm"}
            ,{"caption":"DDD =>microservice","href":"https://www.infoq.com/presentations/microservices-ddd-bounded-contexts/"}
            ,{"caption":"Eventsoucing and CQRS","href":"programming/architecture/eventsourcing.htm"}
            ,{"caption":"Event driven Architecture<","href":"https://ably.com/blog/introduction-event-driven-architecture"}
            ,{"caption":"Event driven with kafka","href":"https://www.google.com/search?q=event-driven+architecture+kafka+c%2523"}
            ,{"caption":"Kafka","href":"programming/architecture/kafka.htm"}
            ,{"caption":"Business Architecture (Togaf)","href":"Topics/Management/togaf.htm"}
        ]
    }
    `;
json1+=`,{"title":"Developement"
,"topic":
        [
            {"caption":"git","href":"programming/git/git.htm"}
            ,{"caption":"github","href":"programming/git/github.htm"}
            ,{"caption":"composer","href":"programming/composer.htm"}
            ,{"caption":"vscode snippet generator","href":"https://snippet-generator.app/"}
            ,{"caption":"Jenkins","href":"https://www.tutorialspoint.com/jenkins/"}
            ,{"caption":"Docker","href":"programming/docker.htm"}
            ,{"caption":"CI/CD Pipeline","href":"https://dzone.com/articles/learn-how-to-setup-a-cicd-pipeline-from-scratch"}
            ,{"caption":"Amazon web services(AWS)","href":"Topics/aws.htm"}
            ,{"caption":"cpp","href":"programming/cpp.htm"}
            ,{"caption":"Summary","href":"summary.htm"}
        ]
    }`; 

json1 +=`,{"title":"C# .Net"
,"topic":
        [
            {"caption":"CSharp","href":"programming/dotnet/cs-advanced.htm"}
            ,{"caption":"Object oriented(oo)","href":"programming/oop.htm"}
            ,{"caption":"C# with VSCode","href":"programming/dotnet/CS_VSCode.htm"}
            ,{"caption":"Aspect. net Boilerplate","href":"https://aspnetboilerplate.com/Pages/Documents"}
            ,{"caption":"lambda","href":"programming/dotnet/lambda.htm"}
            ,{"caption":"Linq","href":"programming/dotnet/linq.htm"}
            ,{"caption":"SOAP Protochol","href":"https://www.tutorialspoint.com/soap/soap_quick_guide.htm"}
            ,{"caption":"WCF","href":"programming/dotnet/wcf.htm"}
            ,{"caption":"WPF","href":"programming/dotnet/wpf.htm"}
            ,{"caption":"WPF MVVM","href":"programming/dotnet/mvvm.htm"}
            ,{"caption":"Nuget","href":"programming/dotnet/nuget.htm"}
            ,{"caption":"Nuget powershell commands","href":"https://learn.microsoft.com/en-us/nuget/reference/powershell-reference"}
            ,{"caption":"Health Check","href":"programming/dotnet/HealthCheck.htm"}
            ,{"caption":"Distributed caching","href":"programming/dotnet/Distributed-caching.htm"}
            ,{"caption":"Prometheus","href":"programming/dotnet/prometheus.htm"}
            ,{"caption":"Easy caching","href":"programming/dotnet/easycaching.htm"}
            ,{"caption":"Wix Toolset","href":"programming/wixtoolset.htm"}
        ]
}`; 

json1 +=`,{"title":".Net Framework"
,"topic":
        [
            {"caption":"Asp.net web api","href":"programming/dotnet/asp.net_web_api.htm"}
            ,{"caption":"Minimal api","href":"programming/dotnet/minimalapi.htm"}
            ,{"caption":".Net","href":"programming/dotnet/dotnet.htm"}
            ,{"caption":".Net Core","href":"programming/dotnet/dotnetCore.htm"}
            ,{"caption":"Fluent API and EF Migrations","href":"programming/dotnet/FluentAPI.htm"}
            ,{"caption":"Entity framework core","href":"programming/dotnet/ef-core.htm"}
            ,{"caption":"Asp.net core","href":"programming/dotnet/aspnetcore.htm"}
            ,{"caption":"Identity core","href":"programming/dotnet/identity.htm"}
            ,{"caption":"jwt","href":"programming/dotnet/jwt.htm"}
            ,{"caption":"MVC4","href":"programming/dotnet/mvc4.htm"}
            ,{"caption":"MVC core6","href":"programming/dotnet/mvccore6.htm"}
            ,{"caption":"asynchronous-programming","href":"https://www.c-sharpcorner.com/learn/c-sharp-asynchronous-programming"}
            ,{"caption":".Net Logging","href":"programming/dotnet/logging.htm"}
            ,{"caption":"serilog","href":"programming/dotnet/serilog.htm"}
            ,{"caption":".Net hosting model","href":"programming/dotnet/dotnet_hosting_model.htm"}
            ,{"caption":"Middle ware","href":"programming/dotnet/middleware.htm"}

           ]
    }`;

json1 +=`,{"title":".Net other"
,"topic":
        [ 
            {"caption":"Speed up visual studio","href":"https://stackoverflow.com/questions/42764166/vs-2017-very-slow-laggy-when-debugging"}
            ,{"caption":"Automapper","href":"programming/dotnet/automapper.htm"}
            ,{"caption":"tfs automated build","href":"https://stackoverflow.com/questions/47898996/how-to-automate-build-and-deployment-in-visual-studio-tfs"}
            ,{"caption":"Microservices","href":"programming/dotnet/microservices.htm"}
            ,{"caption":"Ocelot Api gateway","href":"programming/dotnet/ocelotapigateway.htm"}
            ,{"caption":"Concurrency","href":"programming/dotnet/concurrency.htm"}
            ,{"caption":"signalR","href":"programming/dotnet/signalr.htm"}
            ,{"caption":"autofac","href":"programming/dotnet/autofac.htm"}
            ,{"caption":"dapper","href":"programming/dotnet/dapper.htm"}
            ,{"caption":"pipline middleware","href":"https://endjin.com/blog/2022/02/understanding-middleware-in-aspnet-core"}
            ,{"caption":"gRpc","href":"programming/dotnet/grpc.htm"}
            ,{"caption":".net core DI","href":"https://www.stevejgordon.co.uk/aspnet-core-dependency-injection-what-is-the-iservicecollection"}
            ,{"caption":"copilot","href":""}
            ,{"caption":"telerik UI grid","href":"programming/js/telerik.htm"}
            ,{"caption":"postsharp","href":""}
            ,{"caption":"KingAOP","href":""}
            ,{"caption":"Searching components and lib for .net","href":"https://marketplace.visualstudio.com/search?term=PDF%20Viewer%20WPF&target=VS&category=All%20categories&vsVersion=&sortBy=Relevance"}
            ,{"caption":"microservice proj","href":"programming/dotnet/MicroServiceProject.htm"}
            ,{"caption":"Azure DevOps","href":"programming/dotnet/AzureDevOps.htm"}
            ,{"caption":"MediatR","href":"programming/dotnet/mediatr.htm"}
            ,{"caption":".Net Core 6 React","href":"programming/dotnet/ReactNetCore6.htm"}
        ,{"caption":"Blazor","href":"programming/dotnet/blazor.htm"}
        ,{"caption":"Razor page","href":"programming/dotnet/razor.htm"}
        ,{"caption":"MAUI","href":"programming/dotnet/maui.htm"}
   
       ]
    }`;

json1 +=`,{"title":"Testing"
,"topic":
        [ 
            {"caption":"XUnit","href":"programming/xunit.htm"}
            ,{"caption":"Testing","href":"programming/dotnet/testing.htm"}
            ,{"caption":"postsharp","href":""}
            ,{"caption":"Selenium server","href":"programming/topics/testing/selenium.htm"}
            ,{"caption":"SpecFlow","href":"programming/topics/testing/specflow.htm"}
            ,{"caption":"Moq","href":"programming/topics/testing/moq.htm"}
            ,{"caption":"jest","href":"programming/topics/testing/jest.htm"}
        ]
    }`;

json1+=`,{"title":"Managemnet"
,"topic":
            [
                 {"caption":"Project management","href":"Topics/Management/projectManagement.htm"}
                ,{"href":"Topics/Management/PM-best-practices.htm" ,"caption":"Project management(2)"}
                ,{"href":"Topics/Management/0-bussiness-steps.htm" ,"caption":"Bussiness steps"}
                ,{"href":"Topics/Management/1-management-perception.htm","caption":"Management perception"}
                ,{"href":"Topics/Management/2-defining tasks.htm" ,"caption":"Work creation"}
                ,{"href":"Topics/Management/3-reporting.htm","caption":"Reporting"}
                ,{"href":"Topics/Management/4-presenting.htm","caption":"Presenting"}
                ,{"href":"Topics/Management/5-market-researching.htm","caption":"Market research"}  
                ,{"href":"Topics/Management/6-marketing.htm","caption":"Marketing"}
                ,{"href":"Topics/Management/7-support.htm","caption":"Support"}     
                ,{"href":"Topics/Management/proffessionalism-skills.htm","caption":"Proffessionalism skills"}  
                ,{"href":"Topics/Management/strategicplanning.htm","caption":"strategic planning"} 
                ,{"href":"Topics/Management/policy.htm","caption":"Policy"}  
            ]
        }`;


json1 +=`,{ "title":"JavaScript"
,"topic":
        [
            {"caption":"JavaScript","href":"programming/js/js.htm"}
            ,{"caption":"js oo/patterns","href":"programming/js/oo.htm"}
            ,{"caption":"Bookmarlet","href":"programming/js/bookmarklet.htm"}
            ,{"caption":"Asp.net core","href":"https://www.tutorialsteacher.com/core/aspnet-core-introduction"}
            ,{"caption":"JQuery","href":"programming/js/jquery.htm"}
            ,{"caption":"Ajax","href":"programming/js/ajax.htm"}
            ,{"caption":"vue js","href":"programming/js/vuejs.htm"}
            ,{"caption":"React.Js","href":"programming/React/react.htm"}
            ,{"caption":"redux","href":"programming/React.js/redux.htm"}
            ,{"caption":"redux","href":"https://youtu.be/wZVzeob4ywc"}
            ,{"caption":"React / jsx online test","href":"https://www.google.com/search?q=React+%2F+jsx+online+test&oq=React+%2F+jsx+online+test"}
            ,{"caption":"Next.js","href":"https://snipcart.com/blog/react-ecommerce-tutorial"}
            ,{"caption":"React native","href":"/programming/reactnative.htm"}
            ,{"caption":"Jade","href":"programming/jade.htm"}
            ,{"caption":"webpack","href":"programming/webpack.htm'"}
            ,{"caption":"Node.js<","href":"programming/NodeJS.htm"}
            ,{"caption":"ExpressJS Overview","href":"https://www.tutorialspoint.com/expressjs/expressjs_overview.htm"}
            ,{"caption":"ExpressJS main source","href":"https://expressjs.com/en/4x/api.html"}
            ,{"caption":"Angular","href":"programming/Angular/Angular.htm"}
            ,{"caption":"AngularJS","href":"programming/Angular/AngularJS.htm"}
            ,{"caption":"Typescript","href":"https://www.javatpoint.com/typescript-installation"}
        ]
    }`;

json1 +=`,{"title":"UI/UX"
,"topic":
    [
        {"caption":"CSS","href":"programming/css/css.htm"}
        ,{"caption":"Bootstrap","href":"programming/css/bootstrap.htm"}
        ,{"caption":"Bootstrap sample","href":"programming/css/bootstrapSample.htm"}
        ,{"caption":"Tailwind","href":"programming/css/tailwind/"}
        ,{"caption":"Responsive Design","href":"rogramming/css/responsive.htm"}
        ,{"caption":"sass/scss","href":"programming/css/sass.htm"}
        ,{"caption":"Less","href":"http://lesscss.org/","title":"Writing CSS can become a repetitive and time consuming for little tasks such as having to look up hex color values,closing your tags,etc. . And so that is where a preprocessor comes into play. A CSS preprocessor is basically a scripting language that extends CSS and then compiles it into regular CSS."}
        ,{"caption":"Less example","href":"https://www.javatpoint.com/less-example"}
        ,{"caption":"UI Design patterns","href":"http://ui-patterns.com/patterns"}
        ,{"caption":"UI","href":"programming/UI.htm"}
        ,{"caption":"UX","href":"programming/UX.htm"}
    ]	
    }
    `;

json1 +=`,{ "title":"Databases"
,"topic":
        [
            {"caption":"sql server","href":"programming/db/sqlserver.htm"}
            ,{"caption":"t-sql","href":"programming/db/tsql.htm"}
            ,{"caption":"sql joins","href":"programming/db/joins.htm"}
            ,{"caption":"Sqlite","href":"programming/db/Sqlite.htm"}
            ,{"caption":"sqlite-php web ","href":"http://www.sqlitetutorial.net/sqlite-php/"}
            ,{"caption":"Redis","href":"programming/redis.htm"}
            ,{"caption":"MongoDB","href":"programming/mongodb.htm"}
            ,{"caption":"MySql commands","href":"programming/db/mysqlcommands.htm"}
        ]
    }`;

json1 +=`,{"title":"Tech"
,"topic":
        [
            {"caption":"Elastic search","href":"programming/topics/Elasticsearch.htm"}
            ,{"caption":"Kibana","href":"programming/topics/kibana.htm"}
            ,{"caption":"RabitMQ","href":"programming/topics/messaging/rabbitMQ.htm"}
           ,{"caption":"azure function concepts","href":"https://www.c-sharpcorner.com/article/what-is-azure-functions/"}
            ,{"caption":"azure pipelines","href":"https://www.javatpoint.com/azure-devops-pipeline"}
            ,{"caption":"cryptography","href":"programming/topics/cryptography.htm"}
             ,{"caption":"Mermaid","href":"programming/topics/mermaid.htm","title":"lib for creating diagram from text script"}
        ]
    }`;

json1 +=`,{"title":"PHP"
,"topic":
        [
            {"caption":"php","href":"programming/PHP/php.htm"}
            ,{"caption":"wordpress","href":"programming/PHP/wordpress.htm"}
            ,{"caption":"word press dev.","href":"programming/PHP/wordpressdev.htm"}
            ,{"caption":"Symfony","href":"programming/PHP/symfony.htm"}
            ,{"caption":"Laravel","href":"programming/PHP/laravel.htm"}
        ]
    }`;

json1 +=`,{ "title":"Web Dev"
,"topic":
        [
            {"caption":"Website Security Checklis","href":"https://www.upguard.com/blog/the-website-security-checklist","title":"1. Ensure Sitewide SS:Encrypt website traffic 2. Verify the SSL Certificate:Stay on top of expiration and trust.." ,"href":"#"}
            ,{"caption":"web performance optimization","title":"Web performance optimization occurs by monitoring and analyzing the performance of your web application and identifying ways to improve it.Web applications are a mixture of server-side and client-side code. ","href":"#"}
            ,{"caption":"Chrome Dev Tools","href":"https://developers.google.com/web/tools/chrome-devtools/"}
            ,{"caption":"Azure","href":"https://docs.microsoft.com/en-us/aspnet/aspnet/overview/developing-apps-with-windows-azure/building-real-world-cloud-apps-with-windows-azure/"}
        ]
    }`;

json1 +=`,{"title":"Dev"
,"topic":
        [
            {"caption":"Learn x in y minutes","href":"https://learnxinyminutes.com/"}
            ,{"caption":"Flutter","href":"programming/mobile/flutter.htm"}
            ,{"caption":"goLang","href":"programming/golang.htm"}
            ,{"caption":"Expo","href":"https://docs.expo.dev/"}
            ,{"caption":"SAP","href":"Sap\sap.html"}
            ,{"caption":"ABAP","href":"Sap\abap.html"}
            ,{"caption":"Regular expressions","href":"programming/regx.htm"}
            ,{"caption":"Markdown (md)","href":"programming/topics/markdown"}
             ,{"caption":"Revit & Revit API","href":"programming/revit.htm"}
        ]
    }`;

json1 +=`,{ "title":"Python"
,"topic":
        [
            {"caption":"Python","href":"programming/py/py.htm"}
            ,{"caption":"Django","href":"https://www.djangoproject.com/"}
            ,{"caption":"Django REST","href":"#","tooltip":"Django REST framework is a toolkit for building Web APIs."}
        ]
    }`;

json1 +=`,{  "title":"Java"
,"topic":
        [
            {"caption":"java","href":"programming/j2ee/java.htm"}
            ,{"caption":"Hibernate","href":"programming/j2ee/Hibernate.htm"}
            ,{"caption":"Maven","href":"programming/j2ee/maven.htm"}
            ,{"caption":"Managed Bean","href":"programming/j2ee/ManagedBean.htm"}
            ,{"caption":"Jsf 2","href":"programming/j2ee/jsf.htm"}
            ,{"caption":"Expression language","href":"programming/j2ee/ExpressionLanuage.htm"}
        ]
    }`;

json1 +=`,{ "title":"Office"
,"topic":
        [
            {"caption":"Excel","href":"programming/Excel/index.htm"}
        ]
    }`;

json1 +=`,{ "title":"Online bussniess"
,"topic":
        [
            {"caption":"KDP","href":"Topics/book/index.htm"}
            ,{"caption":"Audio book","href":"Topics/book/audiobook.htm"}
            ,{"caption":"","href":""}
        ]
    }`;

json1 +=`,{ "title":"Trading"
,"topic":
        [
            {"caption":"Bitcoin","href":"Topics/bitcoin.htm"}
            ,{"caption":"MQL4","href":"Topics/OnlineTrading/mql4.htm"}
            ,{"caption":"MQL4 to MQL5","href":"https://www.mql5.com/en/articles/81"}
            ,{"caption":"Forex","href":"Topics/OnlineTrading/forex.htm"}
            ,{"caption":"PineScript","href":"programming/pineScript.htm"}
        ]
    }`;
json1+=`,{"title":"General"
,"topic":
        [
            {"caption":"Immigration","href":"Topics/immi/immi.htm"}
            ,{"caption":"German","href":"languages/german/german.htm"}
            ,{"caption":"Linux","href":"Topics/linux.htm"}
            ,{"caption":"Windows & Registry","href":"Topics/windowsuser.htm"}
            ,{"caption":"Bash script","href":"Topics/bash.htm"}
            ,{"caption":"Batch script","href":"programming/batch.htm"}
            ,{"caption":"Biochemistry","href":"Topics/biochemistry.htm"}
            ,{"caption":"network","href":"Topics/network.htm"}
            ,{"caption":"scada","href":"Topics/scada.htm"}
        
        ]
    }`;
json1+=`,{"title":"Mental skills"
,"topic":
            [
                {"href":"/nilx/Topics/softskills/howtothink.htm" ,"tooltip":"Thinking is a mental tool works base on the cause and effect law. it is a proccess to use imagination,intution  and other higher facaulties to find the cause of an effect and use it","caption":"How to think"}
                ,{"href":"/nilx/Topics/softskills/howtolearn.htm" ,"caption":"How to learn"}
                ,{"href":"Topics/Wisdom/unlearningwisdom.htm","caption":"Unlearning"}
                ,{"href":"/nilx/Topics/softskills/howtosloveaproblem.htm" ,"caption":"How to solve a problem"}
                ,{"href":"/nilx/Topics/softskills/howtosearch.htm" ,"caption":"How to search"}
                ,{"href":"/nilx/Topics/softskills/howtodebug.htm","caption":"How to debug"}
                ,{"href":"/nilx/Topics/softskills/howtocommunicate.htm" ,"caption":"how to communicate"}
                ,{"href":"/nilx/Topics/softskills/howtomanage.htm" ,"caption":"How to manage "}
                ,{"href":"/nilx/Topics/softskills/howtoreadcode.htm" ,"tooltip":"There is main functions in the code file which may have used some other functions inside.you should begin by the main class of the project and the main function(s) of the classs and follow the code." ,"caption":"How to read code"}
                ,{"tooltip":"عملی که پشت آن نتیجه خردمندانه ای که در اثر تجارب قبلی بهو فکر به آن رسیده ایم میباشد.مثلا برای جستجوی آموزش اتوفک نمیزنیم آموزش اتوفک بلکه ابتدا لغات پیشرفته این علم را در میاریم وآنرا جستجو میکنیم که در مورد اتوفک اتریبیوتز میباشد.. ","caption":"wise move"}
            ]
        }`;
json1+=`,{ "title":"Own Business"
,"topic":
        [
            {"caption":"Personal branding","href":"Topics/ownbusiness/personal-branding.htm"}
            ,{"caption":"Bussiness Model","href":"Topics/ownbusiness/BussinessModelCanvas.htm"}
            ,{"caption":"Choosing a Hosting","href":"Topics/ownbusiness/ChoosingHosting.htm"}
            ,{"caption":"Seo","href":"Topics/ownbusiness/seo.htm"}
            ,{"caption":"Funnel","href":"Topics/ownbusiness/digitalmarketingfunnels.png"}
        ]
    }`;
json1+=`,{"title":"Desktop tools"
,"topic":
        [
            {"caption":"TidyTabs","href":"Topics\Tools\TidyTabs.gif"}
            ,{"caption":"Extreme Download manager","href":"https://downloads.sourceforge.net/project/xdman/xdmsetup-2018.msi?r=https%3A%2F%2Fwww.google.com%2F&ts=1543520300&use_mirror=cytrane"}
            ,{"caption":"network meter","href":"https://netbalancer.com/"}
            ,{"caption":"Edit pad","href":"https://www.editpadlite.com/download.html"}
        ]
    }`;
json1+=`,{"title":"Job"
,"topic":
        [
            {"caption":"Job","href":"Topics/jobseek/job.htm"}
            ,{"caption":"Cover letter","href":"Topics/jobseek/CoverLetter.htm"}        
        ]
    }`;	
json1+=`,{ "title":"Refrences"
,"topic":
        [
            {"caption":"Shortcut keys","href":"shortcutkeys.htm"}
            ,{"caption":"Useful Settings","href":"Topics/Tech/usefulsettings.htm"}
            ,{"caption":"android tune ups","href":"Topics/Tech/androidtuneups.htm"}
        ]
    }`;
json1+=`,{ "title":"Temp Desktop"
,"topic":
        [
        {"caption":"Jmeter","href":"https://jmeter.apache.org/usermanual/test_plan.html"},
        {"caption":"Gatling","href":"https://gatling.io/"},
        {"caption":"Lean software development","href":"https://en.wikipedia.org/wiki/Lean_software_development"},
        {"caption":"Creating custom html tag","href":"https://code.tutsplus.com/tutorials/extending-the-html-by-creating-custom-tags--cms-28622"}
            ,{"caption":"wordpress trace plaugin","href":"https://github.com/bobbingwide/oik-bwtrace"}
            ,{"caption":"vertical slice architecture","href":"https://www.google.com/search?q=vertical+slice+architecture"}
            ,{"caption":"Kubernetes","href":"https://www.c-sharpcorner.com/blogs/build-endtoend-net-core-api-and-angular-application-on-kubernetes"}
            ,{"caption":"kubernetes 2","href":"https://www.guru99.com/kubernetes-tutorial.html#1"}
            ,{"caption":"WPA","href":"https://www.c-sharpcorner.com/learn/build-progressive-web-apps"}
            ,{"caption":"powerApps","href":"https://www.avepoint.com/blog/office-365/microsoft-powerapps"}
            ,{"caption":"c# blogs","href":"https://www.c-sharpcorner.com/blogs/"}
            ,{"caption":"sutra ","href":"https://www.google.com/search?num=100&biw=1500&bih=648&tbm=vid&ei=nnIiXJzgEIWxkwXGsbGADw&q=sutra+sadhguru&oq=sutra+sadhguru"}
            ,{"caption":"bit box","href":"https://www.youtube.com/watch?v=Pvq05v6PfTE"}
            ,{"caption":"applied kinesiology","href":"https://www.google.com/search?q=applied%20kinesiology"}
            ,{"caption":"thymus tapping","href":"https://www.google.com/search?q=tymus+tapping&oq=timus+tapping"}
            ,{"caption":"belief system elimination by jimmy scott phd","href":"https://www.google.com/search?q=belief+system+elimination+by+jimmy+scott+phd"}
            ,{"caption":"Laravel Homestead","href":"https://laravel.com/docs/5.7/homestead"}
            ,{"caption":"seo tools","href":"https://www.business2community.com/seo/the-top-10-seo-tools-marketers-want-in-2019-02160206"}
            ,{"caption":"tab grouping in chrome","href":"https://mspoweruser.com/this-is-how-tab-grouping-will-work-on-google-chrome/amp/"}
            ,{"caption":"Conversion Rate Optimization Best Practices","href":"https://vwo.com/conversion-rate-optimization/"}
            ,{"caption":"ERPs comparison","href":"https://www.odoo.com/page/odoo-white-paper"}
            ,{"caption":"StackOverflow reputation","href":"https://www.polidea.com/blog/Best_ways_to_gain_Stack_Overflow_reputation/"}
            ,{"caption":"Delivery manager vs project manager","href":"http://itsadeliverything.com/delivery-manager-a-new-role-for-an-agile-world"}
            ,{"caption":"Free Cloud Hosting Services & Tools","href":"https://iwantmyname.com/services/developer/"}
            ,{"caption":"Canadian Statup visa","href":"https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/start-visa/designated-organizations.html"}
            ,{"caption":"Writing custom Apps for cofluence and jira","href":"https://developer.atlassian.com/platform/forge/build-a-custom-ui-app-in-confluence/"}
            ,{"caption":"freelancing site 4 all nations","href":"https://insolvo.com/"}
            
        ]
    }`;
    
    json1+=`]}`;
    console.log(json1);
