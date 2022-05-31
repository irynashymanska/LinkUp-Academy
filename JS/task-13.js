function removeSpecialCharacters(str) {
  let res  = str.replace(/[&\/\\#,+!@()$~%.'":*?<^>{}]/g, '');
  return res;
}
