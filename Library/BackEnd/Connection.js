function doGet(e) {
  return corsResponse_("GET request received");
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    Logger.log(data);

    if (data.sendEmail === true && data.to && data.message) {
      MailApp.sendEmail({
        to: data.to,
        subject: "Web App Message",
        body: data.message
      });
    }

    return corsResponse_({
      status: "success",
      received: data
    });

  } catch (error) {
    Logger.log(error);
    return corsResponse_({
      status: "error",
      message: error.message
    });
  }
}

function doOptions() {
  return corsResponse_("");
}

function corsResponse_(content) {
  return ContentService.createTextOutput(
      typeof content === "string" ? content : JSON.stringify(content)
    )
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}