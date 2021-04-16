<div class="form-group">
  <label for="serverId">
    Embed/Server ID
  </label>
  <input
    type="text"
    class="form-control"
    name="serverId"
    placeholder="1234567890"
    required
  />
</div>
<div class="form-group">
  <label for="css">
    Custom CSS
    <br />
    <small>
      Styles the embed's theme according to the unique custom CSS ID. Custom CSS
      may be managed from the user dashboard page.
    </small>
  </label>
  <input type="text" class="form-control" name="css" placeholder="0" />
</div>
<div class="form-group">
  <label for="defaultchannel">
    Default Chanel
    <br />
    <small>
      Instead of having the top channel as the first channel your users see, you
      may change it. Enable Discord's Developer mode in the Appearances tab of
      the User Settings and copy the channel ID. Here is a tutorial on obtaining
      the channel ID.
    </small>
  </label>
  <input
    type="text"
    class="form-control"
    name="defaultchannel"
    placeholder="1234567890"
  />
</div>
<div class="form-group">
  <label for="fixedsidenav">
    Fixed Side Nav
    <br />
    <small>
      Always show the left server navigation sidebar on large screens.
    </small>
  </label>
  <input type="checkbox" class="form-control" name="fixedsidenav" />
</div>
<div class="form-group">
  <label for="lang">
    Language
    <br />
    <small>
      Are your users multilingual? No worries, Titan can speak multiple
      languages! Check the about page for a list of all language parameters
      Titan can support.
    </small>
  </label>
  <input type="text" class="form-control" name="lang" placeholder="en_GB" />
</div>
<div class="form-group">
  <label for="noscroll">
    No scroll
    <br />
    <small>
      Prevents the embed from scrolling down on first load. Useful for those who
      wants to set #info -typed channels as their default channel. Gotta have
      those good reads!
    </small>
  </label>
  <input type="checkbox" class="form-control" name="noscroll" />
</div>
<div class="form-group">
  <label for="scrollbartheme">
    Scrollbar Theme
    <br />
    <small>
      Sets the scrollbar theme. View the demo of all themes
      <a
        href="http://manos.malihu.gr/repository/custom-scrollbar/demo/examples/scrollbar_themes_demo.html"
        target="_blank"
        >here</a
      >. Or create your own theme by overriding
      <a href="https://i.imgur.com/SZPL0ag.png" target="_blank"
        >these classes</a
      >
      and following at
      <a
        href="https://github.com/malihu/malihu-custom-scrollbar-plugin/blob/master/jquery.mCustomScrollbar.css"
        target="_blank"
        >these examples</a
      >!
    </small>
  </label>
  <input
    type="text"
    class="form-control"
    name="scrollbartheme"
    placeholder="light"
  />
</div>
<div class="form-group">
  <label for="lockscrollbar">
    Lock Scrollbar
    <br />
    <small>
      Shows the scrollbar permanently without autohiding. (Requires the
      scrollbar theme param to be set for scrollbar to be themed)
    </small>
  </label>
  <input type="checkbox" class="form-control" name="lockscrollbar" />
</div>
<div class="form-group">
  <label for="theme">
    Theme
    <br />
    <small>
      Want your embed to use one of our premade themes? Look no further!
      Available options:
      <ul>
        <li>BetterTitan</li>
        <li>DiscordDark</li>
        <li>FireWyvern</li>
        <li>IceWyvern</li>
        <li>MetroEdge</li>
      </ul>
    </small>
  </label>
  <input
    type="text"
    class="form-control"
    name="theme"
    placeholder="DiscordDark"
  />
</div>
<div class="form-group">
  <label for="userscalable">
    User scalable
    <br />
    <small>
      Enables pinch-to-zoom and auto zoom on input fields for most mobile
      browsers on touch-enabled devices. Disabling this will give your embed a
      more app-like experience. Keep in mind that disabling this might prevent
      accessibility features disabled people rely on from functioning.
    </small>
  </label>
  <input type="checkbox" class="form-control" name="userscalable" />
</div>
