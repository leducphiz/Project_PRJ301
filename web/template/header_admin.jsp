<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<% String path =request.getContextPath();%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Admin</title>
        <link href="<%=path%>/css/style.css" rel="stylesheet" type="text/css"/>
        <link href="<%=path%>/css/bootstrap/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
    </head>
    <body>
        <c:if test="${sessionScope.AccSession.role eq 2 || sessionScope.AccSession.role eq null}">
            <c:redirect url="ErrorPage/error404.jsp"/>
        </c:if>

        <div id="container">
            <div id="header">
                <div id="logo-admin">
                    E-commerce Admin
                </div>
                <div id="banner-admin">
                    <ul>
                        <li><a href="<%=path%>/account/signin" class="nav-link siennaa">Sign Out</a></li>
                    </ul>
                </div>
            </div>
            <div id="content">
                <div id="content-left">
                    <ul>
                        <a href="dashboard.jsp"><li>Dashboard</li></a>
                        <a href="<%=path%>/OrderManage"><li>Orders</li></a>
                        <a href="<%=path%>/ManageProduct"><li>Products</li></a>
                        <a href="#"><li>Customers</li></a>
                    </ul>
                </div>