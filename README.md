# trackingJS

A javascript library used to monitor users activities in a website

## Installation

Just put the fiel dist/trackingJS.min.js in your project, then import it in the index.html of your application, like this:
```
<script src="libs/trackingJS.min.js"></script>
```

## How it works

To start sending informations about the user activities in your site, you should configure the trackingJS in a way the it knows where to send the data collected. You do this with the following command:

```
trackingJS.config('<HOST_BACKEND>/activity')
```

In the command above, **<HOST_BACKEND>** needs to be the url mapped to the address of the application rastreamento-usuarios-aplicacao, which is the app responsible to receive the data
For example, if your rastreamento-usuarios-aplicacao is hosted at https://example-aplicacao, then the address needs to be https://example-aplicacao/activity
