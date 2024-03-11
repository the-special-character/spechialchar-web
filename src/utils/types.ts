export type FooterdataType = {
    data:{
      title:string;
      address:string
      email:string;
      mobile: string;
      privacy:string;
      copyright:string;
    }
  }
  export type CollaboratorCardType = {
    data: {
      
      url: string;
      title: string;
      description: string;
    };
  };

export type homeAccordiandataType={
  data:{
    id:number;
    image:string;
    number:string;
    title:string;
    desc:string;
  }
}
export type HomeBannerdataType={
  data:{
    title:string;
    title2:string;
    subtitle:string;
    button:string;
  }
}
  export type CardType = {
    data : {
      id: number;
      url: string;
      description?: string;
      title: string;
      
    };
  };

  export type Card1Type = {
    data : {
      id: number;
      url: string;
      description?: string;
      title: string;
      height: number;
      width: number;
    };
  };

  export type marquedataType = {
    data : {
      id: number;
      url: string;
    };
  };
  export type ServiceBoxType = {
    data: {
      id: number;
      title: string;
      description: string;
    };
  };
  export type ServiceIconType ={
    data:{
      url:string;
      title:string;
      description:string;
    }
  }