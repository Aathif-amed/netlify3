function inputele(tagname, attrname, attrvalue) {
  var ele = document.createElement(tagname);
  for (let i in attrname) {
    ele.setAttribute(attrname[i], attrvalue[i]);
  }
  return ele;
}
function linebreak(element) {
  var ele = document.createElement(element);
  return ele;
}
function eleWithcontent(tagname, attrname, attrvalue, content) {
  var ele = document.createElement(tagname);
  for (let i in attrname) {
    ele.setAttribute(attrname[i], attrvalue[i]);
  }
  ele.innerHTML = content;
  return ele;
}
var form = inputele("form", ["method"], [""]);
var label = eleWithcontent("label", ["for"], ["fName"], "FirstName:");
var fname = inputele("input", ["id", "type"], ["fName", "text"]);

var label2 = eleWithcontent("label", ["for"], ["mName"], "MiddleName:");
var mname = inputele("input", ["id", "type"], ["mName", "text"]);

var label1 = eleWithcontent("label", ["for"], ["lName"], "LastName:");
var lname = inputele("input", ["id", "type"], ["lName", "text"]);

var label3 = eleWithcontent("label", ["for"], ["email"], "EMail");
var email = inputele("input", ["id", "type"], ["email", "email"]);

var label4 = eleWithcontent("label", ["for"], ["contact"], "Contact");
var contact = inputele("input", ["id", "type"], ["contact", "number"]);

var br = linebreak("br");
var br1 = linebreak("br");
var br2 = linebreak("br");
var br3 = linebreak("br");
var br4 = linebreak("br");
var br5 = linebreak("br");
var br6 = linebreak("br");
var br7 = linebreak("br");
var br8 = linebreak("br");
form.append(
  label,
  br,
  fname,
  br1,
  label1,
  br2,
  mname,
  br3,
  label2,
  br4,
  lname,
  br5,
  label3,
  br6,
  email,
  br7,
  label4,
  br8,
  contact
);
document.body.append(form);
