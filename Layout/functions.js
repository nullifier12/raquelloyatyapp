import * as Brightness from "expo-brightness";

const functions = {
  brightness: async (data) => {
    await Brightness.setBrightnessAsync(data);
  },
  restoreBrightness: async (data) => {
    await Brightness.isUsingSystemBrightnessAsync().then((res) => {
      console.log(res);
    });
  },
  goToRoutes: async (action, data, params) => {
    await action.navigate(`${data}`, params);
  },
};
export default functions;
