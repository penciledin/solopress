<!DOCTYPE html{% if page.html-class %} class="{{ page.html-class }}"{% endif %}>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="{{ page.description }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:site_name" content="{{ site.title }}" />

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
  <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
  <!--[if lte IE 8]>
      <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/grids-responsive-old-ie-min.css">
  <![endif]-->
  <!--[if gt IE 8]><!-->
      <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/grids-responsive-min.css">
  <!--<![endif]-->
  <script src="https://use.fontawesome.com/daee885143.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
  <link rel="stylesheet" href="{{ site.baseurl }}/css/main.css" />

  <script src="/js/vendor/modernizr-2.6.2.min.js"></script>


  <title>{{ page.title }} - {{ site.title }}</title>
	<meta property="og:title" content="{{ page.title }}" />
	<meta property="og:description" content="{{ page.description }}" />
      <meta property="og:url" content="{{ site.url }}{{ page.url }}" />
      <meta property="og:image" content="{% if page.cover-img %}{{ site.url }}{{ page.cover-img }}{% else %}{{ site.url }}/img/og-main.png{% endif %}" />
      <link rel="canonical" href="{{ site.url }}{{ page.url }}" />

      </head>
      <body class="{% if page.body-class %}{{ page.body-class }} {% endif %}page-{{ page.layout }}">
          <!--[if lt IE 7]>
              <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
          <![endif]-->
