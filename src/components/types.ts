export type HeaderBangerProps = { 
  title: string; 
  buttons: string[];  
}
export type RealGsProps = {
  title: string;
  characters: {
    name: string;
    skillset: string;
    votes: number;
  }[]
}
export type ClonesAndGoonsProps = {
  title: string;
  info: {
    name: string;
    nickname: string;
    imgURL: string;
    description: string;    
  }[]
}
  
export type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

export type CharacterArray = Character[];

export type MyCompProps = {
  data: CharacterArray;
};
