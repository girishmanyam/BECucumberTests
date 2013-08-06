<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
   <xsl:output method="html" indent="yes"/>
   <xsl:key name="test" match="dict[integer[preceding-sibling::key[1]='Type']!=4]" use="generate-id(preceding-sibling::dict[integer[preceding-sibling::key[1]='Type']=4][1])"/>

   <xsl:template match="plist">
		<html>
			<head>
				<title>IOS Test Result</title>
			</head>
			<script type="text/javascript">
				$(document).ready(function () {
				        $(".expand").click(function () {
				            $("#mytable tbody").show("slow");
				        });
				        $(".collapse").click(function () {
				            $("#mytable tbody").hide("fast");
				        });
				    });
			
			</script>	
			<style type="text/CSS">
			   table {
			          width:100%; 
					border-right:1px solid #C0C0C0;
					color:#000000;
					font-family:Arial,Verdana,sans-serif;
					font-size:14px;
					padding:1px;
					text-align:center;
			         }
			   th {
			       font-weight:normal;
			      }
			</style>
			<body bgcolor="#E6E6FA">
				<!--TABLE border="1">
				<CAPTION><EM>A test table with merged cells</EM></CAPTION>
				<TR><TH rowspan="2"><TH colspan="2">Average
				    <TH rowspan="2">Red<BR>eyes
				<TR><TH>height<TH>weight
				<TR><TH>Males<TD>1.9<TD>0.003<TD>40%
				<TR><TH>Females<TD>1.7<TD>0.002<TD>43%
				</TABLE-->
				<xsl:variable name="dicts" select="dict[key='All Samples']/array/dict[integer[preceding-sibling::key[1]='Type']=4]"/>  
			    <xsl:variable name="fails" select="count($dicts[key('test', generate-id())[string[preceding-sibling::key[1]='LogType']='Fail']])" />
				<h1>SKY Movies IOS UIAutomation Test Report</h1>
				<h3> Total Tests : <xsl:value-of select="count($dicts)"/></h3>
				<h3> No of Test passed  : <xsl:value-of select="count($dicts) - $fails"/></h3>
				<h3> No of Tests failed : <xsl:value-of select="$fails"/></h3>
				<h3> Test Run at : <xsl:value-of select="dict/array/dict/date"/> </h3>
      <table border="3" align = "center" width="100%" id="mytable">
         <tr>
	         <th bgcolor="#3CB371" height="40" font-weight = "bold" align="center"  nowrap="nowrap" ><b>Test Name</b></th>
               <!--xsl:text>Test Name</xsl:text-->
   
	          <th bgcolor="#3CB371" height="40" align="center" nowrap="nowrap"><b>Steps Description</b></th>
               <!--xsl:text>Test Steps</xsl:text-->
   
				<th bgcolor="#3CB371" height="40" align="center" nowrap="nowrap" ><b>Test Result</b></th>
               <!--xsl:text>Test Result</xsl:text-->
         </tr>
      <xsl:apply-templates select="$dicts"/>
      </table>
      <!--xsl:variable name="fails" select="count($dicts[key('test', generate-id())[string[preceding-sibling::key[1]='LogType']='Fail']])" /-->
      <!--xsl:value-of select="concat('total tests passed = ', count($dicts) - $fails)" />
      <br />
      <xsl:value-of select="concat('total tests failed = ', $fails)" /--> 
 	</body>
	</html>
   </xsl:template>

   <xsl:template match="dict[key('test', generate-id())[string[preceding-sibling::key[1]='LogType']='Fail']]">
      <xsl:call-template name="dict">
         <xsl:with-param name="type" select="'Fail'"/>
         <xsl:with-param name="colour" select="'#FF0000'" />
      </xsl:call-template>
   </xsl:template>

   <xsl:template match="dict" name="dict">
      <xsl:param name="type" select="'Pass'"/>
      <xsl:param name="colour" select="'#00FF00'" />
      <tr>
         <td style ="background-color:lightblue" align="left" height="33"> <b>Test Case :</b> 
            <xsl:value-of select="string[preceding-sibling::key[1]='Message']"/>
         </td>
         <td style ="background-color:lightblue" align="center" height="33">
         </td>
         <td align="center" style="background-color:{$colour}">
            <xsl:value-of select="$type"/>
         </td>
      </tr>
      <xsl:apply-templates select="key('test', generate-id())" mode="results" />
   </xsl:template>

   <xsl:template match="dict" mode="results">
		<xsl:variable name="check" select="string[preceding-sibling::key[1]='LogType']" />
        <xsl:choose>
		   <xsl:when test="$check = 'Pass'  or $check = 'Fail'">
      <tr>
			<!--xsl:if test ="$check = Pass|Fail"-->
         <td>
            <b><!--xsl:value-of select="concat('Step ', position())" /--></b>
         </td>
          
         <td align="left">
            <xsl:value-of select="string[preceding-sibling::key[1]='Message']"/>
         </td>
         <td align="left">
            <xsl:value-of select="string[preceding-sibling::key[1]='LogType']"/>
         </td>
      </tr>
	</xsl:when>
    </xsl:choose>		
   </xsl:template>
</xsl:stylesheet>
