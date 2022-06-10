import jwt from "jsonwebtoken";

// Request body checking
function bodyCheck(req, res, next) {
  var body_ = req.body;
  if (Object.keys(body_).length === 0) {
    return res.status(204).send("Body is empty").end();
  }
  next();
}

// Clear Cookie
function logout_(req, res, next) {
  res.cookie("token", "", { expires: new Date(0) });
  next();
}

// Asigning Cookie
function signCookie(req, res, next) {
  var body_ = req.body;
  var data_ = {
    email: body_.email,
  };

  // token signing
  var token_ = jwt.sign(data_, process.env.key);
  res.cookie("token", token_);
  next();
}

function checkCookie(req, res, next) {
  jwt.verify(req.cookies.token, process.env.key, (err, decoded) => {
    // if (err) return res.status(400).json({ error: err });
    // req.body.cookie_mail = "admin@mailj.com";
    // req.body.cookie_mail = decoded.email;
    req.body.cookie_mail = "admin@mail.com";
    next();
  });
}
// verifying cookie
function verifyCookie(req, res, next) {
  console.log("coming in");
  // next();
  // jwt.verify(req.cookies.token, process.env.key, function (err, decoded) {
  //   if (err) {
  //     return res.redirect("/login");
  //   } else if (req.url == "/login") {
  //     req.body = decoded;
  //     return res.redirect("/");
  //   } else if (req.url == "/signup") {
  //     req.body = decoded;
  //     return res.redirect("/");
  //   }
  //   req.body = decoded;
  //   next();
  // });
}
export { bodyCheck, signCookie, checkCookie, verifyCookie, logout_ };
