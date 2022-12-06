export interface CountryType {
    name: Name
    tld: string[]
    cca2: string
    ccn3: string
    cca3: string
    cioc: string
    independent: boolean
    status: string
    unMember: boolean
    currencies: Currencies
    idd: Idd
    capital: string[]
    altSpellings: string[]
    region: string
    subregion: string
    languages: Languages
    translations: Translations
    latlng: number[]
    landlocked: boolean
    area: number
    flag: string
    flags: any[]
    demonyms: Demonyms
  }
  
  export interface Name {
    common: string
    official: string
    nativeName: NativeName
  }
  
  export interface NativeName {
    jpn: Jpn
  }
  
  export interface Jpn {
    official: string
    common: string
  }
  
  export interface Currencies {
    JPY: Jpy
  }
  
  export interface Jpy {
    name: string
    symbol: string
  }
  
  export interface Idd {
    root: string
    suffixes: string[]
  }
  
  export interface Languages {
    jpn: string
  }
  
  export interface Translations {
    ces: Ces
    deu: Deu
    est: Est
    fin: Fin
    fra: Fra
    hrv: Hrv
    hun: Hun
    ita: Ita
    jpn: Jpn2
    kor: Kor
    nld: Nld
    per: Per
    pol: Pol
    por: Por
    rus: Rus
    slk: Slk
    spa: Spa
    swe: Swe
    urd: Urd
    zho: Zho
  }
  
  export interface Ces {
    official: string
    common: string
  }
  
  export interface Deu {
    official: string
    common: string
  }
  
  export interface Est {
    official: string
    common: string
  }
  
  export interface Fin {
    official: string
    common: string
  }
  
  export interface Fra {
    official: string
    common: string
  }
  
  export interface Hrv {
    official: string
    common: string
  }
  
  export interface Hun {
    official: string
    common: string
  }
  
  export interface Ita {
    official: string
    common: string
  }
  
  export interface Jpn2 {
    official: string
    common: string
  }
  
  export interface Kor {
    official: string
    common: string
  }
  
  export interface Nld {
    official: string
    common: string
  }
  
  export interface Per {
    official: string
    common: string
  }
  
  export interface Pol {
    official: string
    common: string
  }
  
  export interface Por {
    official: string
    common: string
  }
  
  export interface Rus {
    official: string
    common: string
  }
  
  export interface Slk {
    official: string
    common: string
  }
  
  export interface Spa {
    official: string
    common: string
  }
  
  export interface Swe {
    official: string
    common: string
  }
  
  export interface Urd {
    official: string
    common: string
  }
  
  export interface Zho {
    official: string
    common: string
  }
  
  export interface Demonyms {
    eng: Eng
    fra: Fra2
  }
  
  export interface Eng {
    f: string
    m: string
  }
  
  export interface Fra2 {
    f: string
    m: string
  }
  