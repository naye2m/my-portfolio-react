function Consult() {
  return (
    <div id="naye2m-consult">
      <div
        className="video naye2m-video"
        style={{
          backgroundImage: "url(images/cover_bg_1.jpg)",
        }}
      >
        <div className="overlay" />
      </div>
      <div className="choose animate-box">
        <h2>Contact</h2>
        <form action="/responds/" method="POST">
          <div className="row form-group">
            <div className="col-md-6">
              <input
                name="name"
                className="form-control"
                id="name"
                placeholder="Your firstname"
                type="text" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <input
                type="text"
                name="email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                id="email"
                className="form-control"
                placeholder="Your email address" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <input
                name="description"
                className="form-control"
                id="subject"
                placeholder="Your subject of this message"
                type="text" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <textarea
                className="form-control"
                cols={30}
                id="message"
                name="message"
                placeholder="Say something about us"
                rows={10}
                defaultValue={""} />
            </div>
          </div>
          <div className="form-group">
            <input
              className="btn btn-primary"
              type="submit"
              defaultValue="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Consult;
