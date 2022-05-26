import React from 'react'
import { keywordList } from './keywordList'

export function collectKeyword({district}){
  return keywordList.map((keyword)=>{    
    if(keyword.district === district) {
      return keyword.value;
    }
  })[0];
}