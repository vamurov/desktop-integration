**Fork and build this React app and then enhance it to work with your desktop management platform so that it can
perform the actions below. Commit your changes to the repo with appropriate commentary and documentation links.**

<ol>
<li>Register App A and App B with the app directory. Use config / code, not manual steps</li>

<br/>
<li>Set sensible default size and min/max height/width constraints for App A.
    <ul>
        <li>Test: Launch App A from app directory - opens at default size.</li>
        <li>Test: show window resizing adheres to constraints.</li>
    </ul>
</li>
<br/>

<li>As a user, choose random portfolio and snapshot parameters in the UI</li>
<br/>

<li>Click [Open B] button to open App B in a new window snapped to the side of App A, with Portfolio and Snapshot values linked to App A settings.
    <ul>
        <li>Test: drag windows to show grouped/snapped behaviour
        <li>Test: check parameter values (Portfolio & Snapshot) shown in App B match values selected in App A
        <li>Test: change parameters in App A and observe values changing in App B
    </ul>
</li>
<br/>

<li>Click [Duplicate A] button to create a new instance of App A (A2), not grouped/snapped, not linked, but same initial parameter settings as App A1.
    <ul>
        <li>Test: change params in both A1 and A2 to show they're not linked
    </ul>
</li>

<br/>
<li>Click [Notification] button in App B to a) trigger a 5s delayed notification and b) close App B
    <ul>
        <li>Test: after 5s observe notification appear in platform notifications list
        <li>Test: after 5s observe notification id value appear in App A1 and A2
    </ul>
</li>

<br/>
<li>The notification triggered above should include an action button that sets the Snapshot parameter in App A1 to a new
value
    <ul>
        <li>Test: click the notification action button. App A1 becomes focussed and the Snapshot parameter is set to the correct
    value.
    </ul>
</li>

<br/>

<li>Sync App A and App B theme to desktop manager theme
Test: switch desktop manager theme dark <=> light and observer App A & B themes switch in sync.

</ol>

> To run the app locally:
<ul>
 <li>npm install
 <li>npm run dev
</ul>


