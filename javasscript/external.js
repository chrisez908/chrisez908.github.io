
var webmaps =
[
  ["oil spill toolkit",

"https://www.glo.texas.gov",

"The oil spill toolkit developed by enterprise technology solutions is neat"
],
  ["Texas Ecosystems Analytical Mapper",

  "http://tpwd.texas.gov.gis.team",

  "The texas parks and wildlifes landscape ecology program is great"]
];

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";
  // A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a,b);
  message = "<h1>Hello, welcome to my webpage, "+ user_name + "!</h1>"
  return message
}
document.write(message);

function webmap_table()
 {
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
  document.write("<tr>");
  for (var column=0; column < webmaps[0].length; column++){
    if (column === 2)
    {
      document.write("</tr><tr>");
      document.write("<td colspan=2>" + webmaps[row][column]+"</td>")

    } else {
      document.write("<td>"+ webmaps[row][column] + "</td>");
    }
   }
  document.write("</tr>");
  }
document.write("</table>");
}
