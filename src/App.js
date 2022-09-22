import { Routes, Route } from "react-router-dom";
import Screen from "./Screen";
import Button from "./Button";
import Input from "./Input";
import "./styles.css";

/* Change debug to `true` to see the invisible Buttons */
export const debug = false;

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .jpg, .png, .svg
Try to make all your images roughly the same width, 
i.e. 360 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen
*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image="/index.jpg">
              <Button to="/intro-1" x="105" y="530" w="150" h="55" />
            </Screen>
          }
        />
        <Route
          path="/intro-1"
          element={
            <Screen image="/intro-1.jpg" back="/">
              <Button to="/intro-2" x="105" y="530" w="150" h="55" />
            </Screen>
          }
        />
        <Route
          path="/intro-2"
          element={
            <Screen image="/intro-2.jpg" back="/intro-1">
              <Button to="/intro-3" x="105" y="530" w="150" h="55" />
            </Screen>
          }
        />
        <Route
          path="/intro-3"
          element={
            <Screen image="/intro-3.jpg" back="/intro-2">
              <Button to="/bonus" x="105" y="530" w="150" h="55" />
            </Screen>
          }
        />
        <Route
          path="/bonus"
          element={
            <Screen image="/blank-next.jpg" back="/intro-3">
              <Input x="50" y="130" w="250" h="55" label="Your email" />
              <Input
                x="50"
                y="230"
                w="250"
                h="55"
                label="Your password"
                type="password"
              />
              <Button to="/thanks" x="105" y="530" w="150" h="55" />
            </Screen>
          }
        />
        <Route
          path="/thanks"
          element={
            <Screen image="/blank-back.jpg" back="/intro-3">
              <iframe
                title="Thank you"
                src="https://giphy.com/embed/KB8C86UMgLDThpt4WT"
                width="300"
                height="300"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
                style={{
                  position: "absolute",
                  left: "30px",
                  top: "130px"
                }}
              ></iframe>
              <Button to="/" x="105" y="530" w="150" h="55" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
