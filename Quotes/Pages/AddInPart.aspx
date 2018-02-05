<%@ Page language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<WebPartPages:AllowFraming ID="AllowFraming" runat="server" />
<html>
<head>
    <title></title>
    <script type="text/javascript" src="../Scripts/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="../Scripts/jquery-migrate-1.4.1.min.js"></script>

    <!-- Reference if calling REST DB IO -->
<%--    <script type="text/javascript" src="../Scripts/quotesRestDB.js"></script>--%>

    <!-- Reference if calling the list in APP Web -->
    <script type="text/javascript" src="../Scripts/quoteInternalList.js"></script>


    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />

    <!-- Us this if calling the list in APP Web -->
    <style>
    .listResult {width: auto}
    </style>
    </head>
<body>
    <!-- Use this form tag if calling something from a list in app webb -->
    <form id="Main" name="Main" runat="server"></form>

    <!-- If calling REST DB IO -->
    <!-- 
    <div class="quoteWrap">
        <div class="id"></div>
        <div class="quote"></div>
        <div class="author"></div>
    </div>
    -->
    
    <!-- If calling the SharePoint List in APP web -->
    <div class="listResult">
        <div class="quoteText"></div>
        <div class="quoteAuthor"></div>
    </div>

</body>
</html>
