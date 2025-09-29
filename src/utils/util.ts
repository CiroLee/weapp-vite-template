export function getNavBarHeight() {
  const windowInfo = wx.getWindowInfo();
  const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
  // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度）* 2 + 胶囊高度 + 状态栏高度
  return (menuButtonInfo.top - (windowInfo.statusBarHeight || 0)) * 2 + menuButtonInfo.height + windowInfo.statusBarHeight;
}
