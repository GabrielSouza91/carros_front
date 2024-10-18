import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InitialPage } from "./view/initial";

export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>udgfsadgvasdg</div>}>
        <Routes>
          <Route index path="/" element={<InitialPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
