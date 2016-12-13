<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">


    <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<%--    <script type="text/javascript" src="../Scripts/jquery-3.1.1.min.js"></script>--%>

    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <script type="text/javascript" src="../Scripts/quoteInternalList.js"></script>

    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
    <meta name="WebPartPageExpansion" content="full" />


</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">Quotes</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">



    <!-- use for quotesAllItems -->
    <div class="listResult">
        <div class="quoteText"></div>
        <div class="quoteAuthor"></div>
    </div>


    <p><a href="/sites/ChristianDevSite/Quotes/Lists/Quotes/Allitems.aspx">Till listan</a></p>    
    <p><a href="Default.aspx">Default.aspx</a></p> 
 

 

</asp:Content>