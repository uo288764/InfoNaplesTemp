<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
        <head>
            <title>Iconic Sites in Napoli</title>
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid grey;                     
                    padding: 8px;
                }
                th {
					color: white;
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <h2>Iconic Sites in Napoli</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                <xsl:for-each select="sites/site">
                    <tr>
                        <td><xsl:value-of select="name"/></td>
                        <td><xsl:value-of select="description"/></td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
        </html>
    </xsl:template>

</xsl:stylesheet>