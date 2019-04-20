<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <meta name="csrf-token" content="{{csrf_token()}}">
  <title>Laravel58</title>
  <link rel="stylesheet" href="{{asset('css/app.css').'?'.time()}}">
</head>
<body>

<div class="container-fluid b-blue">
    <!-- Content here -->
    aaa
</div>

<script type="text/javascript" src="{{asset('js/manifest.js')}}"></script>
<script type="text/javascript" src="{{asset('js/vendor.js')}}"></script>
<script type="text/javascript" src="{{asset('js/app.js').'?'.time()}}"></script>
</body>
</html>
