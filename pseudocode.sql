return the code in a nuxt3 manner ( so do not use for example TEMPLATE: '' but <template></template>, same goes for the other parts of the code like script, style, etc. ) ) 

START Nuxt3App

DEFINE COMPONENT "ComponentName"
    TEMPLATE
        "HTML code here"
    SCRIPT
        DATA:
            "variableName": "initialValue"
        METHODS:
            "methodName": FUNCTION(parameters)
                "logic here"
            END FUNCTION
    END SCRIPT
    STYLE
        "CSS code here"
    END STYLE
END COMPONENT

DEFINE PAGE "PageName"
    TEMPLATE
        "HTML code here"
    SCRIPT
        DATA:
            "variableName": "initialValue"
        METHODS:
            "methodName": FUNCTION(parameters)
                "logic here"
            END FUNCTION
    END SCRIPT
    STYLE
        "CSS code here"
    END STYLE
END PAGE

DEFINE STORE "StoreName"
    STATE:
        "variableName": "initialValue"
    MUTATIONS:
        "mutationName": FUNCTION(parameters)
            "logic here"
        END FUNCTION
    ACTIONS:
        "actionName": FUNCTION(parameters)
            "logic here"
        END FUNCTION
END STORE

DEFINE MIDDLEWARE "MiddlewareName"
    FUNCTION(parameters)
        "logic here"
    END FUNCTION
END MIDDLEWARE

DEFINE PLUGIN "PluginName"
    FUNCTION(parameters)
        "logic here"
    END FUNCTION
END PLUGIN

DEFINE LAYOUT "LayoutName"
    TEMPLATE
        "HTML code here"
    END TEMPLATE
END LAYOUT

RUN SERVER
    PORT: "portNumber"
    HOST: "hostName"
END SERVER

END Nuxt3App