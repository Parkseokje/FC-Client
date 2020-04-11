connection.query(QUERY.something, [params], function (err, data) {
  if (err) {
		// 쿼리 실패
    res.json({
      success: false,
      msg: err
    });
  } else {
		// 쿼리 성공
    res.json({
      success: true
    });
  }
});

pool.getConnection((err, connection) => {
  if (err) throw err;

  connection.query(QUERY.BOARD.Select, [ req.user.fc_id ], (err, result) => {
    connection.release();

    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: err
      });
    } else {
      res.send({
        list: result,
        loggedIn: req.user
      });
    }
  });
});
