# trackingJS

A javascript library used to monitor users activities in a website and send activities information (acessed pages) to the [rastreamento-usuarios-app](https://github.com/felipedspereira/rastreamento-usuarios-aplicacao)

## Installation

Just put the field dist/trackingJS.min.js in your project, then import it in the index.html of your application, like this:
```
<script src="libs/trackingJS.min.js"></script>
```

## How it works

To start sending informations about the user activities in your site, you should configure the trackingJS in a way that it knows to where to send the collected data. You do this with the following command:

```
trackingJS.config('<HOST_BACKEND>/activity')
```

In the command above, **<HOST_BACKEND>** needs to be the url mapped to the address of the application [rastreamento-usuarios-aplicacao](https://github.com/felipedspereira/rastreamento-usuarios-aplicacao), which is the app responsible to receive the data. For example, if your rastreamento-usuarios-aplicacao is hosted at https://example-aplicacao, then the backend address needs to be mapped as https://example-aplicacao/activity
<br>
<br>
At this point, the data collected will be stored locally in the user's browser. To start send the information remotelly to the backend [rastreamento-usuarios-aplicacao](https://github.com/felipedspereira/rastreamento-usuarios-aplicacao), you need to send a POST request with the user email to the URL **<HOST_BACKEND>/enableActivity**. The content-type of this request should be in x-www-form-urlencoded format.
