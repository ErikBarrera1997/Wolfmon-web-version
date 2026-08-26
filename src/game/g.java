import javax.microedition.lcdui.Graphics;

public final class g extends p {
  private static final int[] a = new int[] { p.b / 3 + 10, (p.b / 3 << 1) - 10, (p.b >> 1) - 10, p.b >> 1 };
  
  private static byte a = false;
  
  private static int e = p.b + (p.b >> 1);
  
  private static int f = p.c >> 1;
  
  private static byte b = 0;
  
  private static final int g = p.b;
  
  private int h = 0;
  
  public int a;
  
  public boolean a = true;
  
  private int i;
  
  private static int j;
  
  private g() {
    this.a = false;
    this.i = -1;
  }
  
  public static final g createTransition(int paramInt) {
    g g1 = new g();
    j = paramInt;
    return g1;
  }
  
  public final void setDuration(int paramInt) {
    this.h = 0;
    this.i = paramInt;
  }
  
  public final void reset() {
    this.h = 0;
  }
  
  public final void keyPressed(int paramInt) {
    if (this.a != -1 && this.a)
      m.postEvent(this.a, this); 
  }
  
  public final void update(int paramInt) {
    this.h += paramInt;
    if (this.a != -1 && this.i != -1 && this.h > this.i)
      m.postEvent(this.a, this); 
    int i;
    if ((i = paramInt * g / 120) < 1)
      i = 1; 
    if (a <= a.length - 1) {
      if (b == 0) {
        e -= i;
      } else {
        e += i;
      } 
      if (b == 0) {
        if (e <= a[a]) {
          b = 1;
          a = (byte)(a + 1);
        } 
      } else if (e >= a[a]) {
        b = 0;
        a = (byte)(a + 1);
      } 
      if (a == a.length)
        e = p.b >> 1; 
    } 
    try {
      Thread.sleep(20L);
      return;
    } catch (InterruptedException interruptedException) {
      return;
    } 
  }
  
  public final void paintScreen(Graphics paramGraphics) {
    paramGraphics.setColor(j);
    paramGraphics.fillRect(0, 0, p.b, p.c);
    if (a == a.length) {
      c.drawSprite(e, f, 25, paramGraphics);
      return;
    } 
    c.drawSprite(e, f, 24, paramGraphics);
  }
}


/* Location:              C:\Users\erikb\Desktop\decompiler\jd-gui-windows-1.6.6\wolf_moon_176x208-106446.jar!\g.class
 * Java compiler version: 1 (45.3)
 * JD-Core Version:       1.1.3
 */