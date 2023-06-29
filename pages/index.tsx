import { useState,useEffect } from "react";
import axios from "axios";
import { stat } from "fs";
import Link from 'next/link';


export default function FormKaos_kaki() {
  return (
    <div className="container-home">
      <nav>
        <div className="left">
          <h1>Toko Kaos Kaki</h1>
        </div>
        <div className="right">
          <ul>
            <li><Link href="/input">Input Data</Link></li>
            <li><Link href="/">List Kaos Kaki</Link></li>
          </ul>
        </div>
      </nav>
      <div className="isi">
      </div>
    </div>
  )
}