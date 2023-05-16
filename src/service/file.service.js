const connection = require("../app/database");

class FileService {
  async create(filename, mimetype, size, userId) {
    const statement =
      "INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);";
    const [result] = await connection.execute(statement, [
      filename,
      mimetype,
      size,
      userId,
    ]);
    return result;
  }

  async queryAvatarWithUserId(userId) {
    const statement = "SELECT * FROM avatar WHERE user_id = ?;";
    const [result] = await connection.execute(statement, [userId]);
    // 直接弹出最后数组最后一个值
    return result.pop();
  }
}

module.exports = new FileService();
