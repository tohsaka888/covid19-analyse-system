export type LangContextProps = {
  lang: 'zh' | 'en'
  setLang: React.Dispatch<React.SetStateAction<'zh' | 'en'>>
}

export type AreaInfoResults = {
  locationId: number;
  continentName: string;
  continentEnglishName: string;
  countryName: string;
  countryEnglishName: string;
  countryFullName: string;
  provinceName: string;
  provinceEnglishName: string;
  provinceShortName: string;
  currentConfirmedCount: number;
  confirmedCount: number;
  suspectedCount: number;
  curedCount: number;
  deadCount: number;
  comment: object;
  cities?: any[];
  updateTime: number;
}

export type AreaInfo = {
  results: AreaInfoResults[];
  success: boolean;
};
