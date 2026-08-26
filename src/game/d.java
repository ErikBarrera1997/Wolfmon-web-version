import java.util.Random;
import javax.microedition.lcdui.Graphics;

public final class d extends p {
  public static final int a = p.b * 85 / 100;
  
  public static final int e = (p.c > 129) ? true : true;
  
  public static final short[] a = new short[] { 
      -1, 53, 54, 55, 56, 57, 58, 59, -1, -1, 
      22, 23, 24, 25, 43, 26, 27, 28, 29, 30, 
      31, 32 };
  
  public static final int[] a = new int[] { 
      347, 350, 349, 346, 353, 355, 354, 348, 348, 351, 
      352, 356 };
  
  public static final int[] b = new int[] { -1, 124, 68, 143, 128, 169, 167, 176, 37, 151 };
  
  private static int h;
  
  private static int i;
  
  private static boolean a;
  
  private static int j;
  
  private static int k;
  
  private static int l;
  
  private static byte a;
  
  private static int m;
  
  private static int n;
  
  private static boolean b;
  
  private static int o;
  
  private static e[] a;
  
  private static e a;
  
  private static int p;
  
  private static boolean c;
  
  private static b a;
  
  private static byte b;
  
  private static byte c;
  
  private static int q;
  
  private static int r = -1;
  
  private static boolean d = 0;
  
  public static final int f = p.b / 16 + 1;
  
  public static final int g = p.c / 16 + 1;
  
  private static byte d;
  
  private static int s;
  
  private static byte e;
  
  private static boolean e;
  
  private static int t;
  
  private static int u;
  
  private static int v;
  
  private static boolean f;
  
  public static byte[] a;
  
  public d() {
    setTitle(c.getString(3), 0);
  }
  
  public final void showContinueGameMenu() {
    setTitle("", 0);
    setTitle(c.getString(2), 1);
    j = 60;
    h = p.c - j - (e << 2);
    b = 10;
    k = 0;
    m = 0;
    n = 0;
    a = true;
    a = (byte[])new e[1];
    a = (byte[])new e(c.getStringFormatted(21, new String[] { "v1.06" }), a, 2);
    a[0] = new e(c.getString(a[b]), a, 2, a[m]);
    h -= (a[0]).c;
    a = (byte[])new b((e[])a, p.c - h - e, this, null);
    i = p.c - h;
    l = ((e)a).c - b.getRowHeight();
    a = (h < ((e)a).c + b.getRowHeight()) ? 1 : 0;
    if (a == null)
      l = 0; 
    b = 1;
    c = 0;
    beginSceneTransition(false);
  }
  
  public final void showNewGameMenu() {
    setTitle(c.getString(3), 0);
    setTitle(c.getString(33), 1);
    b = 1;
    m = -1;
    n = 0;
    a = false;
    a = (byte[])new e[1];
    a[0] = new e(c.getString(a[b]), a, 2);
    a = (byte[])new b((e[])a, p.c, this, null);
    b = 1;
    beginSceneTransition(false);
  }
  
  public final void update(int paramInt) {
    if (b != 0)
      advanceSceneTimer(paramInt); 
    if (a == null) {
      m = -1;
      switch (b) {
        case 2:
          m = 297;
          break;
        case 3:
          m = 298;
          break;
        case 4:
          m = 299;
          break;
        case 5:
          m = 300;
          break;
        case 6:
          m = 301;
          break;
        case 7:
          h.b = 1L;
          break;
      } 
      e(a[b]);
      a = -1;
    } else if (a == -1) {
      switch (h.b) {
        case 7:
          if (v < 0) {
            v += paramInt;
            if (v >= 0)
              f = true; 
          } 
          if (f) {
            v += paramInt;
            if (v > 80) {
              t++;
              v = 0;
              if (t > c.getSpriteData(331, 3) + e)
                f = false; 
            } 
          } 
          break;
        case 2:
          if (f) {
            v += paramInt;
            if (v > 80) {
              t = (t == 0) ? 1 : 0;
              v = 0;
            } 
          } 
          break;
        case 3:
          if (v < 0) {
            v += paramInt;
            if (v >= 0)
              f = true; 
          } 
          if (f) {
            v += paramInt;
            if (v > 80) {
              t++;
              v = 0;
              if (t % 2 == 0)
                for (byte b1 = 1; b1 < 10; b1++)
                  a[b1 * 3] = (byte)(a[b1 * 3] + 1);  
              if (t > a.length) {
                f = false;
                t = 40;
              } 
            } 
          } 
          break;
        case 5:
          if (v < 0) {
            v += paramInt;
            if (v >= 0)
              f = true; 
          } 
          if (f) {
            v += paramInt;
            if (v > 200) {
              v = 0;
              t++;
              u++;
              if (t > 3 && t < 6)
                u--; 
              if (u > 329) {
                f = false;
                u = 329;
                t = 0;
              } 
            } 
          } 
          break;
      } 
    } 
    if (a == true) {
      if (a != null) {
        k += paramInt;
        if (k > 0 && k > 100) {
          l--;
          if (l < -((e)a).c) {
            k = -1000;
            l = ((e)a).c - b.getRowHeight();
          } 
          if (k > 0)
            k = 0; 
        } 
      } 
      p += paramInt;
      if (p > 3000) {
        beginSceneTransition(true);
        p = 0;
      } 
      if (c != 0) {
        a[0] = new e(c.getString(a[b]), a, 2, a[m]);
        a = (byte[])new b((e[])a, p.c - h - e, this, null);
        c = 0;
      } 
    } 
  }
  
  public final void paintScreen(Graphics paramGraphics) {
    paramGraphics.setColor(0);
    paramGraphics.fillRect(0, 0, p.b, p.c);
    if (d != 0)
      return; 
    if (a != true) {
      if (a != null) {
        int i = o;
        if (m != -1) {
          i += e + (n >> 1);
          switch (h.b) {
            case 2:
              drawCaveView(i, paramGraphics);
              break;
            case 7:
              drawWorldMap(i, paramGraphics);
              break;
            case 5:
              drawTownView(i, paramGraphics);
              break;
            case 3:
              drawLakeView(i, paramGraphics);
              break;
            default:
              c.drawSprite(p.b >> 1, i, m, paramGraphics);
              break;
          } 
        } 
        paramGraphics.setColor(13421772);
        a.draw(paramGraphics, p.b - (a[0]).b >> 1, (i > 0) ? (i + (n >> 1) + e) : q);
      } 
    } else {
      c.drawSprite(p.b >> 1, e, 3, paramGraphics);
      paramGraphics.setColor(13421772);
      if (i + h > p.c - b.getRowHeight()) {
        paramGraphics.setClip(0, i, p.b, h - b.getRowHeight());
      } else {
        paramGraphics.setClip(0, i, p.b, h);
      } 
      a.draw(paramGraphics, p.b - ((e)a).b >> 1, i + l);
      paramGraphics.setClip(0, 0, p.b, p.c);
      a.draw(paramGraphics, p.b - (a[0]).b >> 1, j + (e << 1));
    } 
    paintFogOverlay(paramGraphics);
  }
  
  private static void drawWorldMap(int paramInt, Graphics paramGraphics) {
    paramGraphics.setClip(0, e, p.b, paramInt + (n >> 1) - e);
    paramInt += t;
    c.drawSprite(p.b >> 1, paramInt, m, paramGraphics);
    int i = paramInt - (n >> 1) + n;
    int j = (n >> 1) + n;
    for (byte b1 = 0; b1 < i.b.length; b1 += 2) {
      paramGraphics.setColor(i.c[i.randomInt(0, 2, (Random)i.a)]);
      if (i.b[b1] >= null && i.b[b1] <= 64)
        paramGraphics.fillRect(1000 * i.b[b1] / 64 * p.b / 1000, 1000 * i.b[b1 + 1] / 128 * j / 1000 + i, 1, 1); 
    } 
    c.drawSprite(p.b + c.getSpriteData(m, 2) - 20 >> 1, paramInt - (n >> 1) + n + e, 363, paramGraphics);
    paramGraphics.setClip(0, 0, p.b, p.c);
  }
  
  private static void drawLakeView(int paramInt, Graphics paramGraphics) {
    c.drawSprite(p.b >> 1, paramInt, m, paramGraphics);
    int i = (p.b >> 1) - c.getSpriteData(319, 4);
    int j = paramInt - (n >> 1) + t;
    paramGraphics.setClip(0, 0, p.b, j);
    c.drawSprite(p.b >> 1, paramInt, 319, paramGraphics);
    if (t > 0)
      for (byte b1 = 0; b1 < a.length; b1++) {
        paramGraphics.setClip(i + b1, 0, 1, j + a[b1]);
        c.drawSprite(p.b >> 1, paramInt, 319, paramGraphics);
      }  
    paramGraphics.setClip(0, 0, p.b, p.c);
  }
  
  private static void drawTownView(int paramInt, Graphics paramGraphics) {
    c.drawSprite(p.b >> 1, paramInt, m, paramGraphics);
    c.drawSprite(p.b >> 1, paramInt, u, paramGraphics);
  }
  
  private static void drawCaveView(int paramInt, Graphics paramGraphics) {
    c.drawSprite(p.b >> 1, paramInt, m, paramGraphics);
    if (t == 1)
      c.drawSprite(p.b >> 1, paramInt, 303, paramGraphics); 
  }
  
  private static void advanceSceneTimer(int paramInt) {
    if (e == true) {
      s += paramInt;
      if (s > 50) {
        s = 0;
        d = (byte)(d + 1);
        if (d == 6) {
          e = false;
          d = 0;
          if (e) {
            if (r == -2) {
              m.postEvent(18, (Object)null);
              return;
            } 
            if (b != 9 && b != 8)
              b = (byte)(b + 1); 
            if (b > 7 && b <= 9) {
              h.c = 0;
              if (b == 8) {
                r = 22;
              } else if (r != 17 && r != 12 && r != 21) {
                r = 25;
              } 
              d = 1;
              i.r = -1;
              m.postEvent(r, (Object)null);
              return;
            } 
            if (a == true) {
              m++;
              if (b > 21) {
                b = 10;
                m = 0;
              } 
              c = 1;
            } else {
              a = false;
            } 
            beginSceneTransition(false);
            return;
          } 
          b = 0;
        } 
      } 
    } 
  }
  
  private static void beginSceneTransition(boolean paramBoolean) {
    d = 0;
    e = paramBoolean;
    e = true;
    b = 1;
  }
  
  public final void enterLocation() {
    byte b1;
    setTitle(c.getString(3), 0);
    setTitle("", 1);
    a = -1;
    m = -1;
    n = 0;
    b = 9;
    d = 1;
    boolean bool = false;
    switch (h.b) {
      case 2:
        if (c == 0) {
          f = true;
          m = 302;
          t = 0;
          showMessage(68);
        } else if (c == 1) {
          f = false;
          m = 334;
          showMessage(69);
        } else {
          showMessage(70);
        } 
        c = (byte)(c + 1);
        bool = true;
        break;
      case 1:
        m = 304;
        break;
      case 3:
        a = new byte[c.getSpriteData(319, 2)];
        for (b1 = 0; b1 < a.length; b1++)
          a[b1] = (byte)i.randomInt(1, 5, (Random)i.a); 
        m = 318;
        t = 0;
        v = -2000;
        f = false;
        break;
      case 4:
        m = 320;
        break;
      case 5:
        m = 321;
        u = 322;
        v = -2000;
        f = false;
        break;
      case 6:
        if (c == 0) {
          m = 330;
          e(167);
        } else if (c == 1) {
          m = 332;
          e(168);
        } else {
          e(36);
        } 
        c = (byte)(c + 1);
        bool = true;
        break;
      case 7:
        if (c == 0) {
          m = 331;
          t = 0;
          v = -2000;
          f = false;
        } else {
          e(36);
          bool = true;
        } 
        c = (byte)(c + 1);
        break;
      case 9:
        m = 335;
        break;
      case 8:
        m = 333;
        setTitle(c.getString(4), 0);
        setTitle(c.getString(5), 1);
        break;
    } 
    if (!bool)
      e(b[h.b]); 
    beginSceneTransition(false);
  }
  
  private void showMessage(int paramInt) {
    if (paramInt == 168) {
      a[0] = new e(c.getStringFormatted(paramInt, new String[] { String.valueOf(i.k) }), a, 2);
    } else if (paramInt == 36) {
      a[0] = new e(c.getStringFormatted(36, new String[] { String.valueOf(i.e), String.valueOf(i.g), String.valueOf(i.h), String.valueOf(i.i), String.valueOf(i.f), String.valueOf(i.j) }), a, 2);
    } else {
      a[0] = new e(c.getString(paramInt), a, 2);
    } 
    if (m != -1) {
      n = c.getSpriteData(m, 3);
    } else {
      n = 0;
    } 
    a = (byte[])new b((e[])a, a(), null, null);
  }
  
  private int computeListHeight() {
    int i = p.c;
    o = 0;
    if (m != -1) {
      if ((i = p.c - n - e - b.getRowHeight()) > (a[0]).c) {
        o = i - (a[0]).c >> 1;
        i = (a[0]).c;
      } 
    } else {
      q = i - (a[0]).c >> 1;
    } 
    if (q < 0)
      q = b.getRowHeight() + 4; 
    return i;
  }
  
  public final void keyPressed(int paramInt) {
    if (e != true)
      switch (paramInt) {
        case 1:
          if (a != null)
            aa.scrollDown();
          break;
        case 2:
          if (a != null)
            aa.scrollUp();
          break;
        case 5:
        case 7:
        case 15:
          beginSceneTransition(true);
          if (b == 8)
            h.b = 1L; 
          switch (h.b) {
            case 6:
              if (c < 3) {
                r = -2;
                break;
              } 
              h.a = false;
              r = 17;
              break;
            case 7:
              if (c < 2) {
                r = -2;
                break;
              } 
              h.a = false;
              r = 17;
              break;
            case 2:
              if (c < 3) {
                r = -2;
                break;
              } 
              r = -1;
              if (i.m == 7) {
                i.m = true;
                i.f = 0;
              } 
              break;
            case 8:
              h.b = 1L;
              h.d = 1;
              r = 25;
              break;
          } 
          break;
        case 6:
          if (h.b == 8) {
            beginSceneTransition(true);
            h.d = 1;
            i.r = -1;
            r = 21;
            break;
          } 
          if (b >= 1 && b < 8) {
            beginSceneTransition(true);
            b = 7;
          } 
          break;
      }  
    if (a == true && paramInt == 6)
      m.postEvent(21, (Object)null); 
  }
  
  private static void paintFogOverlay(Graphics paramGraphics) {
    if (!e)
      return; 
    if (a == true) {
      paramGraphics.setClip(0, j + (e << 1), p.b, (a[0]).c);
    } else {
      paramGraphics.setClip(0, 0, p.b, p.c);
    } 
    char c = e ? 'Ä¨' : 'Ä£';
    for (byte b1 = 0; b1 < f; b1++) {
      for (byte b2 = 0; b2 < g; b2++)
        c.drawSprite(b1 * 16, b2 * 16, c + (e ? -d : d), paramGraphics); 
    } 
  }
  
  public final void resetScreen() {
    c = 0;
    m = -1;
    n = 0;
    a = (byte[])new e[1];
    a = null;
    q = 0;
    o = 0;
    r = -1;
    t = 0;
    f = false;
    v = 0;
    d = 0;
    setTitle(c.getString(3), 0);
    setTitle(null, 1);
    System.gc();
  }
}


/* Location:              C:\Users\erikb\Desktop\decompiler\jd-gui-windows-1.6.6\wolf_moon_176x208-106446.jar!\d.class
 * Java compiler version: 1 (45.3)
 * JD-Core Version:       1.1.3
 */
