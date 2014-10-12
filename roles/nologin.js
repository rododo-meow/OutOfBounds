var role_nologin = function() {
}

role_nologin.prototype.granted = function(req, res) {
  switch (req.data.type) {
  case "editProblem":
  case "addProblem":
  case "removeProblem":
  case "addContest":
  case "submitCode":
    return false;
    break;
  case "getContests":
  case "getContest":
  case "getProblems":
  case "getProblem":
  case "openSession":
  case "login":
  case "register":
  case "logout":
    return true;
    break;
  default:
    throw new Error("Undefined message permission");
  }
}

module.exports = role_nologin;