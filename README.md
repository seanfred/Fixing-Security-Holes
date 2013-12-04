<!DOCTYPE HTML SYSTEM>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Brakeman Report</title>
  <script>
    function toggle(context) {
      var elem = document.getElementById(context);

      if (elem.style.display != "block")
        elem.style.display = "block";
      else
        elem.style.display = "none";

      elem.parentNode.scrollIntoView();
    }
  </script>
  <style>
    /* CSS style used for HTML reports */

body {
  font-family: sans-serif;
  color: #161616;
}

a {
  color: #161616;
}

p {
  font-weight: bold;
  font-size: 11pt;
  color: #2D0200;
 }

 th {
   background-color: #980905;
   border-bottom: 5px solid #530200;
   color: white;
   font-size: 11pt;
   padding: 1px 8px 1px 8px;
 }

 td {
   border-bottom: 2px solid white;
   font-family: monospace;
   padding: 5px 8px 1px 8px;
 }

 table {
   background-color: #FCF4D4;
   border-collapse: collapse;
 }

 h1 {
   color: #2D0200;
   font-size: 14pt;
 }

 h2 {
   color: #2D0200;
   font-size: 12pt;
 }

 span.high-confidence {
   font-weight:bold;
   color: red;
 }

 span.med-confidence {
 }

 span.weak-confidence {
   color:gray;
 }

 div.warning_message {
   cursor: pointer;
 }

 div.warning_message:hover {
   background-color: white;
 }

 table caption {
   background-color: #FFE;
   padding: 2px;
 }

 table.context {
   margin-top: 5px;
   margin-bottom: 5px;
   border-left: 1px solid #90e960;
   color: #212121;
 }

 tr.context {
   background-color: white;
 }

 tr.first {
   border-top: 1px solid #7ecc54;
   padding-top: 2px;
 }

 tr.error {
  background-color: #f4c1c1 !important
 }

 tr.near_error {
  background-color: #f4d4d4 !important
 }

 tr.alt {
   background-color: #e8f4d4;
 }

 td.context {
   padding: 2px 10px 0px 6px;
   border-bottom: none;
 }

 td.context_line {
   padding: 2px 8px 0px 7px;
   border-right: 1px solid #b3bda4;
   border-bottom: none;
   color: #6e7465;
 }

 pre.context {
   margin-bottom: 1px;
 }

 .user_input {
   background-color: #fcecab;
 }

 div.render_path {
   display: none;
   background-color: #ffe;
   padding: 5px;
   margin: 2px 0px 2px 0px;
 }

 div.template_name {
   cursor: pointer;
 }

 div.template_name:hover {
   background-color: white;
 }

  </style>
</head>
<body>

<h1>Brakeman Report</h1>
<table>
  <tr>
    <th>Application Path</th>
    <th>Rails Version</th>
    <th>Brakeman Version</th>
    <th>Report Time</th>
    <th>Checks Performed</th>
  </tr>
  <tr>
    <td>/Users/sean/final-portfolio</td>
    <td>3.2.14</td>
    <td>2.2.0
    <td>
      2013-12-04 13:45:35 -0800<br><br>
      1.636559 seconds
    </td>
    <td>BasicAuth, ContentTag, CrossSiteScripting, DefaultRoutes, Deserialize, DetailedExceptions, DigestDoS, EscapeFunction, Evaluation, Execute, FileAccess, FilterSkipping, ForgerySetting, JRubyXML, JSONParsing, LinkTo, LinkToHref, MailTo, MassAssignment, ModelAttrAccessible, ModelAttributes, ModelSerialize, NestedAttributes, QuoteTableName, Redirect, Render, ResponseSplitting, SQL, SafeBufferManipulation, SanitizeMethods, SelectTag, SelectVulnerability, Send, SendFile, SessionSettings, SingleQuotes, SkipBeforeFilter, StripTags, SymbolDoS, TranslateBug, UnsafeReflection, ValidationRegex, WithoutProtection, YAMLParsing</td>
  </tr>
</table>
<br>
<h2 id='summary'>Summary</h2>
<table>
  <tr>
    <th>Scanned/Reported</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>Controllers</td>
    <td>12</td>
  </tr>
  <tr>
    <td>Models</td>
    <td>4</td>
  </tr>
  <tr>
    <td>Templates</td>
    <td>35</td>
  </tr>
  <tr>
    <td>Errors</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Security Warnings</td>
    <td>0 <span class='high-confidence'>(0)</span></td>
  </tr>

  <tr>
    <td>Ignored Warnings</td>
    <td>0</td>
  </tr>

</table>
<br>
</body></html>

