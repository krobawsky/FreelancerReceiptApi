import { useState } from "react";
import "./App.css";
import { ListReceipt } from "./components/ListReceipt";
import { Navbar } from "./components/Navbar";
import { ReceiptForm } from "./components/ReceiptForm";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <div className="row g-5 mt-4">
          <div className="col-md-7 col-lg-8">
            <ReceiptForm />
          </div>
          <div className="col-md-5 col-lg-4 order-md-last">
            <ListReceipt />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
