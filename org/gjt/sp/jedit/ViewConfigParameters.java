package org.gjt.sp.jedit;

public class ViewConfigParameters {
	public boolean plainView;
	public String splitConfig;
	public int x;
	public int y;
	public int width;
	public int height;
	public int extState;

	public ViewConfigParameters(boolean plainView, String splitConfig, int x, int y, int width, int height,
			int extState) {
		this.plainView = plainView;
		this.splitConfig = splitConfig;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.extState = extState;
	}

	public void setPlainView(boolean plainView) {
		this.plainView = plainView;
	}

	public void setSplitConfig(String splitConfig) {
		this.splitConfig = splitConfig;
	}

	public void setX(int x) {
		this.x = x;
	}

	public void setY(int y) {
		this.y = y;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public void setExtState(int extState) {
		this.extState = extState;
	}
}