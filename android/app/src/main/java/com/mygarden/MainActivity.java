package com.mygarden;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import android.content.res.Configuration;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "MyGarden";
  }

  @Override
  public void onConfigurationChanged(Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    ReactInstanceManager instanceManager = getReactInstanceManager();

    if (instanceManager != null) {
      instanceManager.onConfigurationChanged(this, newConfig);
    }
  }
}
