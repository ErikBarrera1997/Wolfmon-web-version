import java.util.Random;
import javax.microedition.lcdui.Graphics;
import javax.microedition.lcdui.Image;
import javax.microedition.rms.RecordStore;

public final class h {
  public static final short[] a = new short[] { 85, 89, 88, 90, 86, 92, 87, 91 };
  
  public static final short[] b = new short[] { 
      48, 57, 37, 51, 55, 41, 42, 56, 52, 46, 
      60, 63, 64, 62, 40, 54, 81, 39, 38, 49, 
      47, 59, 50, 43, 45, 61 };
  
  public static final short[] c = new short[] { 
      131, 134, 133, 186, 186, 180, 142, 139, 139, 185, 
      184, 183, 81, 138, 140, 135, 136, 182, 132, 80, 
      78, 181, 181, 181, 124 };
  
  public static final short[] d = new short[] { 74, 67, 44, 66, 65, 65, 82, 33 };
  
  public static final short[] e = new short[] { 26, 34, 29, 28, 36, 35, 30, 31, 27 };
  
  public static final byte[][] a = new byte[][] { { 
        -2, -2, -1, -2, 0, -2, 1, -2, 2, -2, 
        -1, -1, 0, -1, 1, -1 }, { 
        0, -2, 1, -2, 2, -2, 2, -1, 2, 0, 
        0, -1, 1, -1, 1, 0 }, { 
        2, -2, 2, -1, 2, 0, 2, 1, 2, 2, 
        1, -1, 1, 0, 1, 1 }, { 
        2, 0, 2, 1, 2, 2, 1, 2, 0, 2, 
        1, 0, 1, 1, 0, 1 }, { 
        2, 2, 1, 2, 0, 2, -1, 2, -2, 2, 
        1, 1, 0, 1, -1, 1 }, { 
        0, 2, -1, 2, -2, 2, -2, 1, -2, 0, 
        0, 1, -1, 1, -1, 0 }, { 
        -2, 2, -2, 1, -2, 0, -2, -1, -2, -2, 
        -1, 1, -1, 0, -1, -1 }, { 
        -2, 0, -2, -1, -2, -2, -1, -2, 0, -2, 
        -1, 0, -1, -1, 0, -1 } };
  
  public static final byte[][] b = new byte[][] { { -1, 0, 1, 2, 3, 4, -1 }, { 5, 6, 7, 8, 9, 10, 11 }, { -1, 12, 13, 14, 15, 16, -1 }, { -1, -1, 17, 18, 19, -1, -1 }, { -1, -1, -1, 20, -1, -1, -1 } };
  
  public static final byte[][] c = new byte[][] { { -1, -1, -1, 20, -1, -1, -1 }, { -1, -1, 19, 18, 17, -1, -1 }, { -1, 16, 15, 14, 13, 12, -1 }, { 11, 10, 9, 8, 7, 6, 5 }, { -1, -1, -1, 2, -1, -1, -1 } };
  
  public static final byte[][] d = new byte[][] { { -1, 11, -1, -1, -1 }, { 4, 10, 16, -1, -1 }, { 3, 9, 15, 19, -1 }, { 2, 8, 14, 18, 20 }, { 1, 7, 13, 17, -1 }, { 0, 6, 12, -1, -1 }, { -1, 5, -1, -1, -1 } };
  
  public static final byte[][] e = new byte[][] { { -1, -1, -1, 5, -1 }, { -1, -1, 12, 6, 0 }, { -1, 17, 13, 7, 1 }, { 20, 18, 14, 8, 2 }, { -1, 19, 15, 9, 3 }, { -1, -1, 16, 10, 4 }, { -1, -1, -1, 11, -1 } };
  
  public static final byte[][] f = new byte[][] { { -1, 0, 1, -1, 2 }, { 5, 6, 7, 8, -1 }, { 12, 13, 14, 9, 3 }, { 17, 18, 15, 10, 4 }, { 20, 19, 16, 11, -1 } };
  
  public static final byte[][] g = new byte[][] { { -1, 11, 16, 19, 20 }, { 4, 10, 15, 18, 17 }, { 3, 9, 14, 13, 12 }, { -1, 8, 7, 6, 5 }, { 2, -1, 1, 0, -1 } };
  
  public static final byte[][] h = new byte[][] { { 20, 17, 12, 5, -1 }, { 19, 18, 13, 6, 0 }, { 16, 15, 14, 7, 1 }, { 11, 10, 9, 8, -1 }, { -1, 4, 3, -1, 2 } };
  
  public static final byte[][] i = new byte[][] { { 2, -1, 3, 4, -1 }, { -1, 8, 9, 10, 11 }, { 1, 7, 14, 15, 16 }, { 0, 6, 13, 18, 19 }, { -1, 5, 12, 17, 20 } };
  
  public static final int[][] a = new int[][] { 
      { 1513234, 5592379, 9139504, 7753759, 5920308, 6049333, 6042932, 3808065 }, { 3357474, 4209689, 4608065, 4144408, 4078614, 4275738, 4209433, 3490861 }, { 3357474, 4209689, 4608065, 4144408, 4078614, 4275738, 4209433, 3490861 }, { 3416328, 3415305, 4075273, 3547915, 3481354, 3415561, 3415305, 3746312 }, { 1257033, 6722499, 6577498, 8944755, 7637406, 9537181, 11498563, 6499399 }, { 661542, 1397381, 796221, 996436, 1131371, 1131371, 996436, 796221 }, { 661542, 1397381, 796221, 996436, 1131371, 1131371, 996436, 796221 }, { 0, 1257033, 264978, 529956, 794934, 794934, 529956, 1257033 }, { 0, 7051759, 5173, 3624312, 5667519, 5074088, 3558776, 1708066 }, { 1119780, 7051759, 5461083, 6455993, 11711146, 5074088, 8351325, 3813974 }, 
      { 1119780, 7051759, 5461083, 6455993, 11711146, 5074088, 8351325, 3813974 }, { 2504023, 12636653, 12817489, 15770183, 10531279, 13737876, 14109207, 9183513 } };
  
  public static final short[][] a = new short[][] { { 
        35, 63, 9, 90, 35, 100, 9, 100, 0, 63, 
        0, 90, 0, 100, 0, 100 }, { 
        65, 95, -49, 3, 60, 100, -49, 100, 0, 95, 
        0, 3, 0, 100, 0, 100 }, { 
        32, 69, 7, 93, 32, 100, 7, 100, 0, 69, 
        0, 93, 0, 100, 0, 100 }, { 
        16, 41, 97, 149, 16, 100, 97, 100, 0, 41, 
        0, 149, 0, 100, 0, 100 }, { 
        97, 100, -45, 6, 97, 100, -45, 100, 0, 100, 
        0, 6, 0, 100, 0, 100 }, { 
        74, 100, 2, 54, 74, 100, 0, 100, 0, 100, 
        2, 54, 0, 100, 0, 100 }, { 
        34, 66, 18, 82, 34, 100, 18, 100, 0, 66, 
        0, 82, 0, 100, 0, 100 }, { 
        0, 26, 60, 100, 0, 100, 60, 100, 0, 26, 
        0, 100, 0, 100, 0, 100 }, { 
        0, 3, 94, 145, 0, 100, 94, 100, 0, 3, 
        0, 145, 0, 100, 0, 100 } };
  
  public static final byte[][] j = new byte[][] { { 
        14, 86, 33, 67, 14, 100, 33, 100, 0, 86, 
        0, 67, 0, 100, 0, 100 }, { 
        22, 43, 40, 100, 22, 100, 40, 100, 0, 43, 
        0, 100, 0, 100, 0, 100 }, { 
        -13, 113, 31, 69, -13, 100, 31, 100, 0, 113, 
        0, 69, 0, 100, 0, 100 }, { 
        57, 78, 0, 60, 57, 100, 0, 100, 0, 78, 
        0, 60, 0, 100, 0, 100 }, { 
        26, 37, 36, 70, 26, 100, 36, 100, 0, 37, 
        0, 70, 0, 100, 0, 100 }, { 
        21, 40, 47, 87, 21, 100, 47, 100, 0, 40, 
        0, 87, 0, 100, 0, 100 }, { 
        -19, 119, 26, 74, -19, 100, 26, 100, 0, 119, 
        0, 74, 0, 100, 0, 100 }, { 
        60, 79, 13, 53, 60, 100, 13, 100, 0, 79, 
        0, 53, 0, 100, 0, 100 }, { 
        63, 74, 30, 64, 63, 100, 30, 100, 0, 74, 
        0, 64, 0, 100, 0, 100 } };
  
  public static byte[] a = new byte[] { 
      45, 45, 5, 5, 60, 30, 5, 5, 80, 10, 
      5, 5, 5, 5, 45, 45, 5, 5, 60, 30, 
      5, 5, 80, 10, 25, 25, 25, 25, 25, 25, 
      25, 25 };
  
  public static final short[] f = new short[] { 
      10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 
      0 };
  
  public static final short[] g = new short[] { 
      153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 
      163, 164 };
  
  public static short[][] b = new short[][] { 
      { 
        -34, -6, 143, -10, -6, 143, 25, -56, 139, 11, 
        -49, 137, -9, -48, 136, 6, -52, 135, 15, -61, 
        134, -38, -58, 133, -2, -52, 136, -31, -51, 135, 
        7, -55, 134, -22, -52, 133, -1, -25, 109, -4, 
        -27, 108, -22, -59, 106, -4, -57, 107, -5, -80, 
        132, -5, -69, 132, -3, -58, 132, -3, -47, 132, 
        -3, -36, 132, 14, -132, 111, 14, -63, 107, 7, 
        -171, 111, -1, -212, 111, -1, -14, 109, -6, -63, 
        119, -4, -14, 108, -17, -143, 123, -17, -101, 123, 
        -22, -212, 112, -23, -63, 119, -29, -173, 112, -36, 
        -63, 106, -36, -132, 112 }, { 
        -12, -6, 143, -33, -5, 143, -4, -35, 137, 15, 
        -40, 136, -28, -38, 135, 1, -37, 134, -18, -38, 
        133, -2, -26, 132, -2, -37, 132, 14, -112, 111, 
        14, -45, 107, 0, -15, 109, 0, -168, 111, -3, 
        -15, 108, -12, -46, 119, -12, -99, 119, -15, -90, 
        123, -21, -168, 112, -29, -45, 106, -33, -113, 112 }, { 
        -24, -6, 143, 1, -24, 139, -8, -26, 138, 0, 
        -27, 134, -18, -29, 133, -2, -26, 132, -1, -15, 
        109, -3, -15, 108, -27, -136, 105 }, { 
        -22, -5, 143, 7, -20, 115, 6, -76, 113, 0, 
        -97, 113, -1, -8, 118, -1, -16, 117, -7, -21, 
        116, -8, -52, 127, -15, -97, 110, -18, -20, 114, 
        -20, -76, 110 }, { 
        -5, -5, 146, -14, -3, 144, 6, -17, 115, 0, 
        -73, 113, -1, -8, 118, -1, -16, 117, -6, -18, 
        116, -14, -72, 110, -15, -18, 114 }, { 
        0, -1, 145, -8, -2, 144, 0, -9, 129, 0, 
        -5, 129, -1, -10, 129, 1, -38, 130, 1, -12, 
        126, -1, -51, 130, -1, -5, 129, -5, -38, 131, 
        -7, -51, 131, -8, -12, 125, -9, -39, 131 }, { 
        -3, -2, 145, 0, -8, 129, 0, -4, 129, -6, 
        -33, 120 }, { -3, -2, 145, -3, -5, 141, -4, -22, 140 }, { -2, -3, 128, -3, -16, 121 }, { -2, -11, 142, -2, -3, 128 }, 
      { -2, -3, 128, -2, -7, 122 }, { 
        79, -13, 240, 55, -20, 239, 45, -20, 238, 0, 
        -10, 237, 31, -20, 236, 19, -13, 235 }, { 
        79, -13, 240, 67, -13, 235, 49, -13, 241, 57, 
        -13, 240, 37, -13, 235, 18, -10, 237, 12, -13, 
        240, 0, -13, 235 }, { 
        35, -22, 243, 46, -22, 243, 140, -10, 237, 46, 
        -15, 242, 66, -20, 238, 130, -13, 241, 122, -13, 
        241, 167, -13, 240, 155, -13, 235, 138, -13, 240, 
        110, -13, 235, 100, -13, 240, 0, -13, 235, 76, 
        -20, 239, 36, -20, 238, 26, -20, 238, 12, -20, 
        236 }, { 
        95, -10, 237, 95, -13, 240, 111, -13, 235, 71, 
        -20, 239, 36, -20, 239, 57, -20, 236, 137, -20, 
        238, 167, -13, 240, 145, -20, 239, 123, -20, 236, 
        26, -20, 238, 12, -20, 236, 0, -13, 235 }, { 
        -14, -17, -1, -13, -27, -1, -14, -33, -1, -1, 
        -33, -1, -11, -38, -1, 0, -38, -1, 22, -27, 
        -1, -27, -27, -1, -27, -17, -1, 22, -17, -1, 
        2, -17, -1, 2, -27, -1, -24, -27, -1, -24, 
        -17, -1, 18, -30, -1, -21, -34, -1, 6, -6, 
        -1, 9, -34, -1, 6, -16, -1, 6, -20, -1, 
        6, -11, -1, -15, -18, -1, -30, -30, -1, -15, 
        -14, -1 }, { 
        -11, -23, -1, 0, -23, -1, -10, -18, -1, -13, 
        -18, -1, -16, -21, -1, 10, -18, -1, 5, -7, 
        -1, 5, -12, -1, 3, -7, -1, -8, -12, -1, 
        -5, -12, -1, 3, -12, -1, 5, -21, -1 }, { -5, -5, -1 }, { 
        -11, -56, 343, 5, -56, 344, 5, -77, 344, -11, 
        -77, 343, 5, -84, 342, -15, -84, 341, -5, -14, 
        336, -5, -28, 338, -5, -56, 337, -5, -112, 339, 
        -5, -70, 338, -5, -84, 337, -5, -42, 336 }, { 
        -11, -56, 343, 5, -56, 344, 5, -77, 344, -11, 
        -77, 343, 5, -84, 342, -15, -84, 341, -5, -14, 
        336, -5, -28, 338, -5, -56, 337, -5, -70, 338, 
        -5, -84, 337, -5, -42, 336 }, 
      { -3, -26, 340 }, { 0, -10, 345 }, { 
        -1, -1, 305, -79, -24, 314, 34, -48, 313, -41, 
        -67, 311, -13, -71, 310, 12, -51, 309, -42, -44, 
        308, 31, -21, 307 }, { 
        -1, -1, 305, -72, -24, 314, 26, -35, 313, 36, 
        -54, 312, -38, -67, 311, -12, -72, 310, 14, -46, 
        309, -34, -42, 308, 17, -19, 307, -60, -47, 306 }, { 
        -1, -1, 305, 36, -12, 307, -49, -57, 314, 23, 
        -36, 313, 35, -52, 312, -62, -37, 311, 8, -40, 
        310, 19, -60, 309, -14, -46, 308, -41, -31, 306 } };
  
  public static int a = true;
  
  private static int k = -1;
  
  private static int l = 1;
  
  private static int m = 1;
  
  private static Object a = new Object();
  
  private static int n = -1;
  
  private static boolean f = false;
  
  private static boolean g = 1;
  
  private static int o = -1;
  
  private static p a = null;
  
  public static int b = 1L;
  
  public static boolean a = false;
  
  public static boolean b = 0L;
  
  public static boolean c = 0;
  
  private static boolean h = 1;
  
  public static boolean d = 0;
  
  public static i a = null;
  
  private static d a = null;
  
  private static int[] b;
  
  public static final int[] a = new int[] { 45, 46, 47 };
  
  public static byte a = true;
  
  public static boolean e = 1;
  
  private boolean i = 0;
  
  public static byte b;
  
  public static final int c = p.b >> 1;
  
  public static final int d = p.c >> 1;
  
  public static final int e = c - 20;
  
  public static final int f = c + 20;
  
  private static int p = d + 20;
  
  private static byte[] b;
  
  private static int[] c;
  
  private static byte[] c;
  
  private static int[] d;
  
  private static int[] e;
  
  private static int[] f;
  
  private static int[] g;
  
  private static long a;
  
  public static final int g = c - 10;
  
  public static final int h = c + 10;
  
  public static final int i = 106;
  
  public static final int j = i + 7;
  
  private static int q;
  
  private static int r;
  
  private static int s;
  
  private static int t;
  
  private static byte c = 6;
  
  private static int u;
  
  private static int v;
  
  private static byte d;
  
  private static byte e;
  
  private static int w;
  
  private static long b;
  
  private static Random a;
  
  public h() {
    a = new Random(System.currentTimeMillis());
    b = new int[3];
    b = new byte[4];
    for (byte b = 0; b < 4; b++)
      b[b] = 0L; 
    c = new int[4];
    d = new int[4];
    e = new int[4];
    f = new int[4];
    c = new byte[4];
    g = new int[4];
    a = System.currentTimeMillis();
  }
  
  private j createLanguageMenu(int paramInt) {
    j j = new j((paramInt == -1) ? "Language" : c.getString(9), -1);
    if (paramInt >= 0)
      j.setTitle("", -1); 
    j.setItem(0, (paramInt == -1) ? "OK" : c.getString(0), 7, -1);
    if (paramInt >= 0)
      j.setItem(1, c.getString(2), 1, 1); 
    String[] arrayOfString = c.getLanguageNames();
    String str;
    if ((str = System.getProperty("microedition.locale")) != null)
      str = str.substring(0, 2); 
    for (byte b = 0; b < arrayOfString.length; b++) {
      int k;
      if ((k = arrayOfString[b].indexOf(';')) == -1)
        k = arrayOfString[b].length(); 
      j.addItem(new e(arrayOfString[b].substring(0, k), j.i, 2), -1);
      if (b == paramInt || (k < arrayOfString[b].length() && paramInt == -1 && arrayOfString[b].substring(k + 1).startsWith(str))) {
        j.selectItem(b);
        paramInt = b;
      } 
    } 
    return j;
  }
  
  public final void handleEvent(int paramInt) {
    switch (paramInt) {
      case 1:
        n.setSoundEnabled(false);
        try {
          k = m.loadRecord("l")[0];
        } catch (Exception exception) {
          k = -1;
        } 
        m.postEvent((k == -1) ? 6 : 8, this);
        c.loadResources(0);
        synchronized (a) {
          l = 4;
          if (m >= 5)
            m.postEvent(11, this); 
        } 
        c.loadResources(1);
        j.setEngine(this);
        j.a = false;
        j.e = 1;
        checkSaveData();
        loadHighScores();
        loadMenuSprites();
        synchronized (a) {
          while (m <= 4) {
            try {
              a.wait();
            } catch (InterruptedException interruptedException) {}
          } 
        } 
    if (n.isSoundEnabled())
          loadSoundBank(); 
        synchronized (a) {
          l = 5;
          while (m < 7) {
            try {
              a.wait();
            } catch (InterruptedException interruptedException) {}
          } 
          showMenuOrGame();
          while (!(m.getCurrentScreen() instanceof j)) {
            try {
              Thread.sleep(50L);
            } catch (InterruptedException interruptedException) {}
          } 
          p = c.getSpriteData(2, 3);
          c.unloadGroup(0);
          return;
        } 
      case 2:
        g = 0;
        if (b == 1) {
          f = true;
          return;
        } 
        f = false;
        if (b == 3) {
          a.d();
          a = null;
        } else if (b == 4 || b == 5) {
          a = null;
        } else {
          a = (Random)m.getCurrentScreen();
        } 
        m.setNextScreen((p)null);
        n.stopSound();
        return;
      case 3:
        g = 1;
        if (o != -1)
          n.playSound(o, -1); 
        if (f != null)
          return; 
        if (b == 3) {
          m.postEvent(20, this);
          return;
        } 
        if (b == 4 || b == 5) {
          m.postEvent(21, this);
          return;
        } 
        showMenuOrGame();
        return;
      case 4:
        n.stopPlayer();
        break;
    } 
  }
  
  public final void dispatchEvent(int paramInt, Object paramObject) {
    int k;
    j j = null;
    if (paramObject instanceof j)
      j = (j)paramObject; 
    switch (paramInt) {
      case 19:
        m.requestDestroy();
        return;
      case 3:
        n.setSoundEnabled(((k = j.getItemId(j.f)) == 1));
        if (n.isSoundEnabled()) {
          m.setNextScreen(a.createWaitScreen(-1));
          loadSoundBank();
          n.playSound(62, -1);
          m.setNextScreen(j);
        } 
        return;
      case 4:
        a = (byte)j.getItemId(j.f);
        j.setItemText(0, c.getString(a[a]));
        return;
      case 5:
        e = (j.getItemId(j.f) == 1) ? 1 : 0;
        return;
      case 2:
        a = (byte)j.getItemId(j.f);
        try {
          m.saveRecord(new byte[] { (byte)a }, "ws");
          return;
        } catch (Exception exception) {
          return;
        } 
      case 6:
        m.setNextScreen(createLanguageMenu(k));
        return;
      case 7:
        k = j.f;
        try {
          m.saveRecord(new byte[] { (byte)k }, "l");
        } catch (Exception exception) {}
      case 8:
        m.setNextScreen(a.createWaitScreen(-1));
        c.loadResources(k);
        c.unloadResource(0);
        c.loadResources(0);
        if (l == 5) {
          m.setNextScreen(j.createMenu(1));
          return;
        } 
        synchronized (a) {
          m = 3;
          m = 4;
          m.setNextScreen(j.createMenu(4));
          return;
        } 
      case 9:
      case 10:
        synchronized (a) {
          n.setSoundEnabled((paramInt == 9));
          m = 5;
          a.notify();
          n = (l == 4) ? 0 : -1;
        } 
      case 11:
        if (n < 2) {
          a a;
          m = 6;
          n++;
          int[] arrayOfInt1 = { -1, 25, 23 };
          int[] arrayOfInt2 = { 0, 0, 0 };
          int[] arrayOfInt3 = { 0, 2500, 3000 };
          if (n == 1) {
            g g = g.createTransition(0);
          } else {
            a = a.createProgressScreen(arrayOfInt1[n], arrayOfInt2[n]);
          } 
          if (n > 0)
            if (a instanceof g) {
              ((g)a).a = true;
              ((g)a).a = true;
              ((g)a).setDuration(arrayOfInt3[n]);
            } else {
              a.a = 11;
              a.a = true;
              a.setTimer(arrayOfInt3[n]);
            }  
          m.setNextScreen(a);
          return;
        } 
        if (m.getCurrentScreen() instanceof a)
          ((a)m.getCurrentScreen()).a = -1; 
        synchronized (a) {
          m = 7;
          if (l == 5)
            a.notify(); 
          return;
        } 
      case 21:
        b = 1L;
        m.setNextScreen(a.createWaitScreen(-1));
        n.stopPlayer();
        while (!(m.getCurrentScreen() instanceof a)) {
          try {
            Thread.sleep(50L);
          } catch (InterruptedException interruptedException) {}
        } 
        unloadWorldSprites();
        destroyOffscreenBuffers();
        loadMenuSprites();
        showMenuOrGame();
        return;
      case 12:
        resetAllData();
        a = false;
      case 13:
      case 20:
        b = 1L;
        m.setNextScreen(a.createWaitScreen(-1));
        n.stopPlayer();
        while (!(m.getCurrentScreen() instanceof a)) {
          try {
            Thread.sleep(50L);
          } catch (InterruptedException interruptedException) {}
        } 
        destroyOffscreenBuffers();
        loadMenuSprites();
        if (paramInt == 13) {
          a = (Random)j.createMenu(7);
        } else if (paramInt == 12) {
          a = (Random)j.createMenu(8);
        } 
        showMenuOrGame();
        return;
      case 24:
        resetAllData();
        m.setNextScreen(j.createMenu(3));
        return;
      case 22:
      case 25:
        b = 1L;
        if (c != 0) {
          m.setNextScreen(a.createWaitScreen(-1));
          loadWorldSprites();
          b = 4L;
          if (g != 0)
            n.playSound(58, -1); 
          m.setNextScreen((p)a);
          return;
        } 
        if (paramInt == 22)
          a = false; 
        loadGameWorld();
        startOrResumeGame();
        return;
      case 29:
        return;
      case 26:
        if (a != null) {
          m.setNextScreen(j.createMenu(2));
          return;
        } 
        m.setNextScreen(j.createMenu(3));
        return;
      case 28:
        m.setNextScreen(a.createWaitScreen(-1));
        m.setNextScreen(j.createMenu(5));
        return;
      case 16:
      case 17:
        b = 1L;
        m.setNextScreen(a.createWaitScreen(-1));
        while (!(m.getCurrentScreen() instanceof a)) {
          try {
            Thread.sleep(50L);
          } catch (InterruptedException interruptedException) {}
        } 
        unloadWorldSprites();
        if (paramInt == 16) {
          b = 0L;
        } else {
          b = 10L;
        } 
        loadWorldSprites();
        if (a == null)
          a = (Random)new d(); 
        if (paramInt == 16) {
          a.showNewGameMenu();
          a = true;
          c = 1;
          n.playSound(58, -1);
        } else {
          a.showContinueGameMenu();
          if (j == null)
            n.playSound(62, -1); 
        } 
        b = 4L;
        m.setNextScreen((p)a);
        return;
      case 18:
        if (paramObject == null) {
          a.d();
          return;
        } 
        b = 1L;
        m.setNextScreen(a.createWaitScreen(-1));
        while (!(m.getCurrentScreen() instanceof a)) {
          try {
            Thread.sleep(50L);
          } catch (InterruptedException interruptedException) {}
        } 
        if (b == 6 || b == 7) {
          long l = b;
          destroyOffscreenBuffers();
          b();
          b = l;
          a = true;
        } else {
          destroyOffscreenBuffers();
        } 
        loadWorldSprites();
        if (a == null) {
          a = (Random)new d();
          a.resetScreen();
        } 
        n.playSound(58, -1);
        a.d();
        m.setNextScreen((p)a);
        c = 1;
        b = 5L;
        return;
      case 27:
        n.playSound(i.a, -1);
        return;
      case 14:
      case 15:
        b = 1L;
        m.setNextScreen(a.createWaitScreen(-1));
        n.stopPlayer();
        while (!(m.getCurrentScreen() instanceof a)) {
          try {
            Thread.sleep(50L);
          } catch (InterruptedException interruptedException) {}
        } 
        d = 1;
        if (paramInt == 14) {
          m.postEvent(25, this);
          return;
        } 
        m.postEvent(20, this);
        break;
    } 
  }
  
  public final void populateMenu(j paramj, int paramInt) {
    paramj.setTitle("", -1);
    if (paramInt == 0) {
      if (a == null)
        paramj.removeItem(0); 
      paramj.selectItem(0);
    } 
    if (paramInt == 1) {
      paramj.setItemValue(0, a);
      paramj.setItemValue(1, n.isSoundEnabled() ? 1 : 0);
      paramj.addItem(new e(c.getString(9), paramj.i, 2), 6);
    } 
    if (paramInt == 5)
      paramj.addItem(new e(c.getStringFormatted(34, new String[] { c.getString(49) }), paramj.i, 2)); 
    if (paramInt == 8)
      paramj.setItemText(0, c.getStringFormatted(21, new String[] { "v1.06" })); 
    if (paramInt == 3) {
      paramj.setItemValue(2, 1);
      paramj.setItemValue(3, 1);
    } 
    if (paramInt == 6)
      for (byte b = 0; b < 3; b++)
        paramj.addItem(new e((b + 1) + ". " + ((b[b] == -1) ? "-" : String.valueOf(b[b])), p.b * 85 / 100, 2));  
  }
  
  public final void paintGauge(Graphics paramGraphics, int paramInt) {
    if (m >= 7 || l >= 5) {
      c.drawSprite(p.b >> 1, 8, 2, paramGraphics);
      updateAmbientActivity();
      paintAmbientSprite(paramGraphics);
      e();
      paintObjectives(paramGraphics);
    } 
  }
  
  private void loadSoundBank() {
    if (this.i != 0)
      return; 
    this.i = 1;
    c.loadResources(1);
    short[] arrayOfShort = c.getResourceGroup(1);
    for (byte b = 0; b < arrayOfShort.length; b++)
      n.registerSound((byte[])c.getResource(arrayOfShort[b]), arrayOfShort[b]); 
    c.unloadGroup(1);
  }
  
  private void loadHighScores() {
    // Byte code:
    //   0: aconst_null
    //   1: astore_1
    //   2: iconst_0
    //   3: istore_2
    //   4: iload_2
    //   5: iconst_3
    //   6: if_icmpge -> 21
    //   9: getstatic h.b : [I
    //   12: iload_2
    //   13: iconst_m1
    //   14: iastore
    //   15: iinc #2, 1
    //   18: goto -> 4
    //   21: ldc 'wh'
    //   23: iconst_0
    //   24: invokestatic openRecordStore : (Ljava/lang/String;Z)Ljavax/microedition/rms/RecordStore;
    //   27: dup
    //   28: astore_1
    //   29: ifnull -> 75
    //   32: ldc 'wh'
    //   34: invokestatic a : (Ljava/lang/String;)[B
    //   37: astore_2
    //   38: iconst_0
    //   39: istore_3
    //   40: iconst_0
    //   41: istore #4
    //   43: iload #4
    //   45: iconst_3
    //   46: if_icmpge -> 75
    //   49: getstatic h.b : [I
    //   52: iload #4
    //   54: aload_2
    //   55: iload_3
    //   56: invokestatic readBigEndianInt : ([BB)I
    //   59: iastore
    //   60: iload_3
    //   61: iconst_4
    //   62: iadd
    //   63: i2b
    //   64: istore_3
    //   65: iload #4
    //   67: iconst_1
    //   68: iadd
    //   69: i2b
    //   70: istore #4
    //   72: goto -> 43
    //   75: aload_1
    //   76: invokevirtual closeRecordStore : ()V
    //   79: return
    //   80: pop
    //   81: return
    //   82: pop
    //   83: aload_1
    //   84: invokevirtual closeRecordStore : ()V
    //   87: return
    //   88: pop
    //   89: return
    //   90: astore #5
    //   92: aload_1
    //   93: invokevirtual closeRecordStore : ()V
    //   96: goto -> 100
    //   99: pop
    //   100: aload #5
    //   102: athrow
    // Exception table:
    //   from	to	target	type
    //   21	75	82	java/lang/Exception
    //   21	75	90	finally
    //   75	79	80	java/lang/Exception
    //   82	83	90	finally
    //   83	87	88	java/lang/Exception
    //   90	92	90	finally
    //   92	96	99	java/lang/Exception
  }
  
  private static int readBigEndianInt(byte[] paramArrayOfbyte, byte paramByte) {
    paramByte = (byte)(paramByte + 1);
    paramByte = (byte)(paramByte + 1);
    paramByte = (byte)(paramByte + 1);
    return i.uByteToInt(paramArrayOfbyte[paramByte]) << 24 | i.uByteToInt(paramArrayOfbyte[paramByte]) << 16 | i.uByteToInt(paramArrayOfbyte[paramByte]) << 8 | i.uByteToInt(paramArrayOfbyte[paramByte]);
  }
  
  public static final void insertHighScore() {
    // Byte code:
    //   0: bipush #12
    //   2: newarray byte
    //   4: astore_0
    //   5: iconst_m1
    //   6: istore_1
    //   7: iconst_0
    //   8: istore_2
    //   9: iload_2
    //   10: iconst_3
    //   11: if_icmpge -> 36
    //   14: getstatic h.b : [I
    //   17: iload_2
    //   18: iaload
    //   19: getstatic i.e : I
    //   22: if_icmpge -> 30
    //   25: iload_2
    //   26: istore_1
    //   27: goto -> 36
    //   30: iinc #2, 1
    //   33: goto -> 9
    //   36: iload_1
    //   37: iconst_m1
    //   38: if_icmpeq -> 106
    //   41: iconst_2
    //   42: istore_2
    //   43: iload_2
    //   44: iload_1
    //   45: if_icmple -> 66
    //   48: getstatic h.b : [I
    //   51: iload_2
    //   52: getstatic h.b : [I
    //   55: iload_2
    //   56: iconst_1
    //   57: isub
    //   58: iaload
    //   59: iastore
    //   60: iinc #2, -1
    //   63: goto -> 43
    //   66: getstatic h.b : [I
    //   69: iload_1
    //   70: getstatic i.e : I
    //   73: iastore
    //   74: iconst_0
    //   75: istore_2
    //   76: iload_2
    //   77: bipush #12
    //   79: if_icmpge -> 98
    //   82: aload_0
    //   83: iload_2
    //   84: getstatic h.b : [I
    //   87: iload_2
    //   88: iconst_2
    //   89: ishr
    //   90: iaload
    //   91: invokestatic a : ([BII)I
    //   94: istore_2
    //   95: goto -> 76
    //   98: aload_0
    //   99: ldc 'wh'
    //   101: invokestatic a : ([BLjava/lang/String;)V
    //   104: return
    //   105: pop
    //   106: return
    // Exception table:
    //   from	to	target	type
    //   98	104	105	java/lang/Exception
  }
  
  private void checkSaveData() {
    RecordStore recordStore = null;
    a = false;
    try {
      if ((recordStore = RecordStore.openRecordStore("w", false)) != null) {
        a = true;
        b = 1L;
      } 
      byte[] arrayOfByte;
      if ((arrayOfByte = m.loadRecord("ws")) != null)
        a = arrayOfByte[0]; 
    } catch (Exception exception) {
      try {
        return;
      } catch (Exception exception1) {
        return;
      } 
    } finally {
      try {
        recordStore.closeRecordStore();
      } catch (Exception exception) {}
    } 
  }
  
  public static final void resetAllData() {
    e = 1;
    a = true;
    b = 0L;
    h = 1;
    d = 0;
    m.deleteRecord("w");
    a = false;
    b = 0L;
    a = null;
    System.gc();
  }
  
  private void showMenuOrGame() {
    if (g != 0) {
      o = -1;
      n.playSound(62, -1);
    } else {
      o = 62;
    } 
    if (a == null) {
      m.setNextScreen(j.createMenu(0));
    } else {
      m.setNextScreen((p)a);
      a = null;
    } 
    b = 2L;
    f = false;
  }
  
  private void startOrResumeGame() {
    if (f != null) {
      m.postEvent(20, this);
      return;
    } 
    if (a == null || h != 0 || d != 0) {
      i.resetGameState();
      if (b != 0L)
        i.loadWorldData(); 
      i.playClickSound(false);
      a = true;
      h = 0;
      d = 0;
    } else {
      i.playClickSound(true);
      a.e();
    } 
    i.i = false;
    i.h = false;
    i.g = false;
    m.setNextScreen((p)a);
    b[0] = 2L;
    clearTimers();
    b = 3L;
  }
  
  private void loadMenuSprites() {
    c.loadResources(2);
    c.loadResources(46);
    c.loadResources(3);
  }
  
  private void unloadMenuSprites() {
    c.unloadResource(2);
    c.unloadResource(46);
  }
  
  private void loadWorldSprites() {
    c.loadResources(24);
    switch (b) {
      case 0:
        c.loadResources(25);
        c.loadResources(26);
        c.loadResources(27);
        c.loadResources(28);
        c.loadResources(29);
        return;
      case 8:
        c.loadResources(42);
        return;
      case 6:
        c.loadResources(39);
        c.loadResources(41);
        return;
      case 7:
        c.loadResources(40);
        c.loadResources(48);
        return;
      case 2:
        c.loadResources(30);
        c.loadResources(43);
        return;
      case 1:
        c.loadResources(31);
        return;
      case 3:
        c.loadResources(36);
        return;
      case 4:
        c.loadResources(37);
        return;
      case 5:
        c.loadResources(38);
        return;
      case 9:
        c.loadResources(44);
        return;
      case 10:
        c.loadResources(46);
        c.loadResources(2);
        break;
    } 
  }
  
  private void unloadWorldSprites() {
    c.unloadResource(25);
    c.unloadResource(26);
    c.unloadResource(27);
    c.unloadResource(28);
    c.unloadResource(29);
    c.unloadResource(42);
    c.unloadResource(39);
    c.unloadResource(40);
    c.unloadResource(41);
    c.unloadResource(30);
    c.unloadResource(31);
    c.unloadResource(36);
    c.unloadResource(37);
    c.unloadResource(38);
    c.unloadResource(43);
    c.unloadResource(44);
    c.unloadResource(46);
    if (c == 0 && a != null)
      a.e(); 
    System.gc();
  }
  
  private void prepareWorldData() {
    if (a == null || h != 0)
      i.loadTileData(); 
  }
  
  private void createOffscreenBuffers() {
    i.a = (f)Image.createImage(45, 45);
    i.a = (f)i.a.getGraphics();
    i.b = (f)Image.createImage(176, 169);
    i.b = (f)i.b.getGraphics();
    System.gc();
    c.loadResources(24);
    c.loadResources(53);
    c.loadResources(23);
    c.loadResources(6);
    c.loadResources(7);
    c.loadResources(8);
    c.loadResources(9);
    c.loadResources(15);
    c.loadResources(17);
    c.loadResources(18);
    c.loadResources(10);
    c.loadResources(11);
    c.loadResources(12);
    c.loadResources(13);
    c.loadResources(20);
    c.loadResources(21);
    c.loadResources(16);
    c.loadResources(14);
    c.loadResources(45);
    c.loadResources(22);
    c.loadResources(47);
    c.loadResources(48);
    c.loadResources(49);
    c.loadResources(50);
    c.loadResources(51);
    c.loadResources(32);
    c.loadResources(33);
    c.loadResources(34);
    c.loadResources(35);
    c.loadResources(19);
    c.loadResources(52);
    c.loadResources(54);
    c.loadResources(55);
    c.loadResources(56);
    c.loadResources(57);
  }
  
  private void destroyOffscreenBuffers() {
    i.a = null;
    i.a = null;
    i.b = null;
    i.b = null;
    c.unloadResource(53);
    c.unloadResource(23);
    c.unloadResource(6);
    c.unloadResource(7);
    c.unloadResource(8);
    c.unloadResource(9);
    c.unloadResource(15);
    c.unloadResource(17);
    c.unloadResource(18);
    c.unloadResource(10);
    c.unloadResource(11);
    c.unloadResource(12);
    c.unloadResource(13);
    c.unloadResource(20);
    c.unloadResource(21);
    c.unloadResource(16);
    c.unloadResource(14);
    c.unloadResource(45);
    c.unloadResource(22);
    c.unloadResource(47);
    c.unloadResource(48);
    c.unloadResource(49);
    c.unloadResource(50);
    c.unloadResource(51);
    c.unloadResource(32);
    c.unloadResource(33);
    c.unloadResource(34);
    c.unloadResource(35);
    c.unloadResource(19);
    c.unloadResource(52);
    c.unloadResource(54);
    c.unloadResource(55);
    c.unloadResource(56);
    c.unloadResource(57);
    System.gc();
  }
  
  private void loadGameWorld() {
    m.setNextScreen(a.createWaitScreen(-1));
    n.stopPlayer();
    while (!(m.getCurrentScreen() instanceof a)) {
      try {
        Thread.sleep(50L);
      } catch (InterruptedException interruptedException) {}
    } 
    unloadMenuSprites();
    unloadWorldSprites();
    if (a == null)
      a = (Random)new i(); 
    prepareWorldData();
    createOffscreenBuffers();
  }
  
  public static final void showMessageDialog(int paramInt1, String[] paramArrayOfString, int paramInt2) {
    String str;
    b b;
    if (paramArrayOfString == null) {
      str = c.getString(paramInt1);
    } else {
      str = c.getStringFormatted(paramInt1, paramArrayOfString);
    } 
    if (str.equals("")) {
      i.tickTimers();
      return;
    } 
    if (paramInt2 == -1) {
      e[] arrayOfE;
      (arrayOfE = new e[1])[0] = new e(str, p.b * 85 / 100, 2);
      b = new b(arrayOfE, (arrayOfE[0]).c, (p)a, null);
    } else {
      e[] arrayOfE;
      (arrayOfE = new e[2])[0] = new e("", p.b * 85 / 100, 2, paramInt2);
      arrayOfE[1] = new e(str, p.b * 85 / 100, 2);
      b = new b(arrayOfE, (arrayOfE[0]).c + (arrayOfE[1]).c + 2, (p)a, null);
    } 
    m.setNextScreen(b);
  }
  
  public static final void showMissionDialog() {
    e[] arrayOfE = new e[i.G];
    for (byte b1 = 0; b1 < i.G; b1++) {
      String str;
      if (i.k[b1] == 221) {
        int[] arrayOfInt;
        if (i.l < null) {
          boolean bool = false;
        } else {
          arrayOfInt = i.l;
        } 
        String[] arrayOfString = { "" + arrayOfInt };
        if (b1 == 0) {
          str = c.getStringFormatted(i.k[b1], arrayOfString);
        } else {
          str = "\n" + c.getStringFormatted(i.k[b1], arrayOfString);
        } 
      } else if (b1 == 0) {
        str = c.getString(i.k[b1]);
      } else {
        str = "\n" + c.getString(i.k[b1]);
      } 
      arrayOfE[b1] = new e(str, p.b * 85 / 100, 2);
    } 
    b b;
    m.setNextScreen(b = new b(arrayOfE, 208, (p)a, null));
  }
  
  public static final void clearTimers() {
    boolean bool = false;
    byte b;
    for (b = 0; b < 4; b++) {
      if (b[b] == 2) {
        bool = true;
        break;
      } 
    } 
    if (bool)
      for (b = 0; b < 4; b++)
        b[b] = 0L;  
  }
  
  public static final void updateObjectives() {
    // Byte code:
    //   0: iconst_0
    //   1: istore_0
    //   2: iload_0
    //   3: iconst_4
    //   4: if_icmpge -> 657
    //   7: getstatic h.g : [I
    //   10: iload_0
    //   11: dup2
    //   12: iaload
    //   13: invokestatic currentTimeMillis : ()J
    //   16: getstatic h.a : J
    //   19: lsub
    //   20: l2i
    //   21: isub
    //   22: iastore
    //   23: invokestatic a : ()Lp;
    //   26: instanceof i
    //   29: ifeq -> 36
    //   32: iconst_1
    //   33: goto -> 37
    //   36: iconst_0
    //   37: istore_1
    //   38: getstatic h.g : [I
    //   41: iload_0
    //   42: iaload
    //   43: ifgt -> 651
    //   46: getstatic h.b : [B
    //   49: iload_0
    //   50: baload
    //   51: tableswitch default -> 651, 0 -> 76, 1 -> 135, 2 -> 403
    //   76: iload_1
    //   77: ifeq -> 109
    //   80: getstatic h.g : [I
    //   83: iload_0
    //   84: bipush #60
    //   86: sipush #180
    //   89: getstatic h.a : Ljava/util/Random;
    //   92: invokestatic a : (IILjava/util/Random;)I
    //   95: sipush #1000
    //   98: imul
    //   99: iastore
    //   100: getstatic h.b : [B
    //   103: iload_0
    //   104: iconst_1
    //   105: bastore
    //   106: goto -> 651
    //   109: getstatic h.g : [I
    //   112: iload_0
    //   113: sipush #5000
    //   116: sipush #10000
    //   119: getstatic h.a : Ljava/util/Random;
    //   122: invokestatic a : (IILjava/util/Random;)I
    //   125: iastore
    //   126: getstatic h.b : [B
    //   129: iload_0
    //   130: iconst_1
    //   131: bastore
    //   132: goto -> 651
    //   135: iconst_0
    //   136: istore_2
    //   137: iconst_0
    //   138: istore_3
    //   139: iload_3
    //   140: iconst_4
    //   141: if_icmpge -> 164
    //   144: getstatic h.b : [B
    //   147: iload_3
    //   148: baload
    //   149: iconst_2
    //   150: if_icmpne -> 158
    //   153: iconst_1
    //   154: istore_2
    //   155: goto -> 164
    //   158: iinc #3, 1
    //   161: goto -> 139
    //   164: iload_2
    //   165: ifne -> 651
    //   168: iconst_0
    //   169: iconst_1
    //   170: getstatic h.a : Ljava/util/Random;
    //   173: invokestatic a : (IILjava/util/Random;)I
    //   176: i2b
    //   177: istore_3
    //   178: iconst_0
    //   179: istore #4
    //   181: iconst_0
    //   182: istore #5
    //   184: iload_1
    //   185: ifeq -> 272
    //   188: getstatic i.c : Z
    //   191: ifne -> 234
    //   194: getstatic i.e : Z
    //   197: ifne -> 234
    //   200: getstatic i.d : B
    //   203: getstatic i.e : B
    //   206: bipush #13
    //   208: ldc 57344
    //   210: invokestatic a : (BBII)I
    //   213: iconst_2
    //   214: if_icmpeq -> 234
    //   217: getstatic i.d : B
    //   220: getstatic i.e : B
    //   223: bipush #13
    //   225: ldc 57344
    //   227: invokestatic a : (BBII)I
    //   230: iconst_4
    //   231: if_icmpne -> 244
    //   234: getstatic h.b : [B
    //   237: iconst_0
    //   238: iconst_2
    //   239: bastore
    //   240: invokestatic d : ()V
    //   243: return
    //   244: iload_3
    //   245: ifne -> 254
    //   248: sipush #176
    //   251: goto -> 255
    //   254: iconst_0
    //   255: istore #4
    //   257: bipush #93
    //   259: bipush #113
    //   261: getstatic h.a : Ljava/util/Random;
    //   264: invokestatic a : (IILjava/util/Random;)I
    //   267: istore #5
    //   269: goto -> 302
    //   272: iload_3
    //   273: ifne -> 282
    //   276: getstatic h.f : I
    //   279: goto -> 285
    //   282: getstatic h.e : I
    //   285: istore #4
    //   287: getstatic h.p : I
    //   290: bipush #-5
    //   292: iconst_5
    //   293: getstatic h.a : Ljava/util/Random;
    //   296: invokestatic a : (IILjava/util/Random;)I
    //   299: iadd
    //   300: istore #5
    //   302: iconst_0
    //   303: istore #6
    //   305: iload #6
    //   307: iconst_4
    //   308: if_icmpge -> 400
    //   311: getstatic h.c : [I
    //   314: iload #6
    //   316: iload #4
    //   318: bipush #-12
    //   320: bipush #12
    //   322: getstatic h.a : Ljava/util/Random;
    //   325: invokestatic a : (IILjava/util/Random;)I
    //   328: iadd
    //   329: iastore
    //   330: getstatic h.d : [I
    //   333: iload #6
    //   335: iload #5
    //   337: bipush #-12
    //   339: bipush #12
    //   341: getstatic h.a : Ljava/util/Random;
    //   344: invokestatic a : (IILjava/util/Random;)I
    //   347: iadd
    //   348: iastore
    //   349: getstatic h.g : [I
    //   352: iload #6
    //   354: iload_1
    //   355: ifeq -> 363
    //   358: bipush #25
    //   360: goto -> 365
    //   363: bipush #50
    //   365: iastore
    //   366: getstatic h.b : [B
    //   369: iload #6
    //   371: iconst_2
    //   372: bastore
    //   373: getstatic h.c : [B
    //   376: iload #6
    //   378: iload_3
    //   379: bastore
    //   380: getstatic h.e : [I
    //   383: iload #6
    //   385: iconst_0
    //   386: iastore
    //   387: getstatic h.f : [I
    //   390: iload #6
    //   392: iconst_0
    //   393: iastore
    //   394: iinc #6, 1
    //   397: goto -> 305
    //   400: goto -> 651
    //   403: iload_1
    //   404: ifeq -> 505
    //   407: getstatic i.c : Z
    //   410: ifne -> 453
    //   413: getstatic i.e : Z
    //   416: ifne -> 453
    //   419: getstatic i.d : B
    //   422: getstatic i.e : B
    //   425: bipush #13
    //   427: ldc 57344
    //   429: invokestatic a : (BBII)I
    //   432: iconst_2
    //   433: if_icmpeq -> 453
    //   436: getstatic i.d : B
    //   439: getstatic i.e : B
    //   442: bipush #13
    //   444: ldc 57344
    //   446: invokestatic a : (BBII)I
    //   449: iconst_4
    //   450: if_icmpne -> 463
    //   453: getstatic h.b : [B
    //   456: iconst_0
    //   457: iconst_2
    //   458: bastore
    //   459: invokestatic d : ()V
    //   462: return
    //   463: getstatic h.e : [I
    //   466: iload_0
    //   467: iaload
    //   468: iconst_2
    //   469: if_icmple -> 545
    //   472: getstatic h.e : [I
    //   475: iload_0
    //   476: iaload
    //   477: bipush #6
    //   479: irem
    //   480: ifne -> 545
    //   483: getstatic h.f : [I
    //   486: iload_0
    //   487: iaload
    //   488: bipush #10
    //   490: if_icmpge -> 545
    //   493: getstatic h.f : [I
    //   496: iload_0
    //   497: dup2
    //   498: iaload
    //   499: iconst_1
    //   500: iadd
    //   501: iastore
    //   502: goto -> 545
    //   505: getstatic h.e : [I
    //   508: iload_0
    //   509: iaload
    //   510: bipush #16
    //   512: if_icmple -> 545
    //   515: getstatic h.e : [I
    //   518: iload_0
    //   519: iaload
    //   520: bipush #8
    //   522: irem
    //   523: ifne -> 545
    //   526: getstatic h.f : [I
    //   529: iload_0
    //   530: iaload
    //   531: bipush #10
    //   533: if_icmpge -> 545
    //   536: getstatic h.f : [I
    //   539: iload_0
    //   540: dup2
    //   541: iaload
    //   542: iconst_1
    //   543: iadd
    //   544: iastore
    //   545: getstatic h.c : [B
    //   548: iload_0
    //   549: baload
    //   550: iconst_1
    //   551: if_icmpne -> 579
    //   554: getstatic h.c : [I
    //   557: iload_0
    //   558: dup2
    //   559: iaload
    //   560: getstatic h.f : [I
    //   563: iload_0
    //   564: iaload
    //   565: iconst_m1
    //   566: iconst_1
    //   567: getstatic h.a : Ljava/util/Random;
    //   570: invokestatic a : (IILjava/util/Random;)I
    //   573: iadd
    //   574: iadd
    //   575: iastore
    //   576: goto -> 601
    //   579: getstatic h.c : [I
    //   582: iload_0
    //   583: dup2
    //   584: iaload
    //   585: getstatic h.f : [I
    //   588: iload_0
    //   589: iaload
    //   590: iconst_m1
    //   591: iconst_1
    //   592: getstatic h.a : Ljava/util/Random;
    //   595: invokestatic a : (IILjava/util/Random;)I
    //   598: iadd
    //   599: isub
    //   600: iastore
    //   601: getstatic h.d : [I
    //   604: iload_0
    //   605: dup2
    //   606: iaload
    //   607: iconst_2
    //   608: isub
    //   609: iastore
    //   610: getstatic h.g : [I
    //   613: iload_0
    //   614: bipush #50
    //   616: iastore
    //   617: getstatic h.e : [I
    //   620: iload_0
    //   621: dup2
    //   622: iaload
    //   623: iconst_1
    //   624: iadd
    //   625: iastore
    //   626: getstatic h.c : [I
    //   629: iload_0
    //   630: iaload
    //   631: iflt -> 645
    //   634: getstatic h.c : [I
    //   637: iload_0
    //   638: iaload
    //   639: getstatic p.b : I
    //   642: if_icmple -> 651
    //   645: getstatic h.b : [B
    //   648: iload_0
    //   649: iconst_0
    //   650: bastore
    //   651: iinc #0, 1
    //   654: goto -> 2
    //   657: invokestatic currentTimeMillis : ()J
    //   660: putstatic h.a : J
    //   663: return
  }
  
  public static final void paintObjectives(Graphics paramGraphics) {
    paramGraphics.setColor(4211275);
    for (byte b = 0; b < 4; b++) {
      if (b[b] == 2)
        if (c[b] == 1) {
          c.drawSprite(c[b], d[b], 20 + e[b] % 3, paramGraphics);
        } else {
          c.drawSprite(c[b], d[b], 17 + e[b] % 3, paramGraphics);
        }  
    } 
  }
  
  private static void paintAmbientSprite(Graphics paramGraphics) {
    if (u != -1 && u != 69)
      c.drawSprite(q, r, u, paramGraphics); 
  }
  
  private static void updateAmbientActivity() {
    if (Math.abs((int)(System.currentTimeMillis() - b)) > w) {
      switch (c) {
        case 10:
          q -= 2;
          if (v == 0 || v == 1) {
            u = 9;
          } else {
            u = 4;
          } 
        case 11:
          if (c == 11) {
            q += 2;
            if (v == 0 || v == 1) {
              u = 10;
            } else {
              u = 8;
            } 
          } 
          d = (byte)(d - 1);
          w = 180;
          if (d == 0) {
            int j;
            if ((j = i.randomInt(0, 10, a)) < 2) {
              c = 3;
            } else {
              c = 5;
            } 
          } 
          v++;
          if (v > 2)
            v = 0; 
          if (q < c - 30 || q > c + 30) {
            c = 3;
            s = 0;
          } 
          break;
        case 1:
          pickDirectionSprite(c);
          w = 180;
          c = 2;
          break;
        case 2:
          pickDirectionSprite(c);
          w = 180;
          c = 5;
          break;
        case 3:
          pickDirectionSprite(c);
          w = 180;
          c = 4;
          break;
        case 4:
          pickDirectionSprite(c);
          w = 180;
          c = 0;
          u = 69;
          break;
        case 5:
          if (e == 1) {
            u = 6;
          } else if (e == 2) {
            u = 4;
          } else {
            u = 8;
          } 
          v = 0;
          rollRandomEncounter(e);
          w = 1500;
          break;
        case 8:
          w = 180;
          c = 5;
          u = 7;
          if (e == 1) {
            e = 0;
            break;
          } 
          e = 1;
          break;
        case 9:
          w = 180;
          c = 5;
          u = 5;
          if (e == 1) {
            e = 2;
            break;
          } 
          e = 1;
          break;
        case 6:
          q = i.randomInt(g, h, a);
          r = i.randomInt(i, j, a);
          w = 180;
          e = (byte)i.randomInt(0, 2, a);
          c = 1;
          u = 69;
          t = i.randomInt(30000, 30000, a);
          break;
        case 0:
          s = 0;
          w = 5000 + i.randomInt(1000, 5000, a);
          c = 6;
          u = 69;
          break;
        case 7:
          u = 69;
          c = 5;
          w = 130;
          break;
      } 
      if (c != 0)
        s += w; 
      if (s > t && c != 3 && c != 4) {
        c = 3;
        s = 0;
        w = 180;
      } 
      b = System.currentTimeMillis();
    } 
  }
  
  private static void pickDirectionSprite(int paramInt) {
    if (e == 1) {
      switch (paramInt) {
        case 1:
        case 4:
          u = 12;
          break;
        case 2:
        case 3:
          u = 11;
          break;
      } 
      return;
    } 
    if (e == 2) {
      q -= 2;
      switch (paramInt) {
        case 1:
        case 4:
          u = 15;
          break;
        case 2:
        case 3:
          u = 13;
          break;
      } 
      return;
    } 
    q += 2;
    switch (paramInt) {
      case 1:
      case 4:
        u = 16;
        return;
      case 2:
      case 3:
        u = 14;
        break;
    } 
  }
  
  private static void rollRandomEncounter(byte paramByte) {
    int j = i.randomInt(0, 100, a);
    if (paramByte == 1) {
      if (j < 10) {
        c = 3;
        return;
      } 
      if (j < 40)
        return; 
      if (j < 60) {
        c = 7;
        return;
      } 
      if (j < 90) {
        c = 8;
        return;
      } 
      c = 9;
      return;
    } 
    if (j < 10)
      return; 
    if (j < 30) {
      c = 7;
      return;
    } 
    if (j < 85) {
      if (paramByte == 2) {
        c = 10;
      } else {
        c = 11;
      } 
      d = (byte)i.randomInt(8, 16, a);
      return;
    } 
    if (paramByte == 2) {
      c = 9;
      return;
    } 
    c = 8;
  }
}


/* Location:              C:\Users\erikb\Desktop\decompiler\jd-gui-windows-1.6.6\wolf_moon_176x208-106446.jar!\h.class
 * Java compiler version: 1 (45.3)
 * JD-Core Version:       1.1.3
 */
