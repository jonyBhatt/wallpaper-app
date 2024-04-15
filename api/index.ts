import { Params } from "@/app/home";
import axios from "axios";

interface FormatParams {
  [key: string]: string; // Specify that the keys are strings and the values are strings
}
const API_KEY = process.env.EXPO_PUBLIC_PIXABAY_API_KEY;

const BASE_URL = `${process.env.EXPO_PUBLIC_PIXABAY_BASE_URL}?key=${API_KEY}`;

const formatUrl = (params: any) => {
  let url = BASE_URL + `&per_page=25&editors_choice=false`;
  if (!params) return url;
  let paramKeys = Object.keys(params);
  paramKeys.map((key: string) => {
    let value = key === "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });
  // console.log("Url: ", url);
  return url;
};

export const callApi = async (params: Params) => {
  try {
    const res = await fetch(formatUrl(params));
    const data = await res.json()
    
   return{
    success:true,
    data
   }
  } catch (error: any) {
    console.log("error: ", error.message);
    return {
      success: false,
    };
  }
};
