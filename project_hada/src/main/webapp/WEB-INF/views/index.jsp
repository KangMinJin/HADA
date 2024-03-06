<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>HADA.</title>
    <link rel="stylesheet" href="resources/css/common.css">
    <script src='resources/js/index.global.min.js'></script>
    <script>

        document.addEventListener('DOMContentLoaded', function() {
            var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
                headerToolbar: {
                    left: 'prev',
                    center: 'title',
                    right:'next'
                },
                initialView: 'dayGridMonth',
                locale: 'ko',
                selectable: true
            });
            calendar.render();
        });

    </script>
</head>
<body>
    <div class="wrapper">
    <jsp:include page="./layout/sidebar.jsp"/>
    <div id='calendar'></div>
    </div>
</body>
</html>
