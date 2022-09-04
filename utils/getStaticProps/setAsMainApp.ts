export interface SetAsMainAppResult {
  props: {
    isMainApp: boolean;
  };
}

export default async function setAsMainApp(): Promise<SetAsMainAppResult> {
  return {
    props: {
      isMainApp: true,
    },
  };
}
