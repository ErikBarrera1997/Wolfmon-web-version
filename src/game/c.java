import java.io.DataInputStream;
import java.io.IOException;
import javax.microedition.lcdui.Graphics;
import javax.microedition.lcdui.Image;

public final class c {
  private static Object[] a;
  
  private static Object[] b;
  
  private static short[][] a;
  
  private static short[][] b;
  
  private static short[][] c;
  
  private static int a = false;
  
  private static int[] a = new int[4];
  
  private static int b = -1;
  
  private static int c = -1;
  
  public static final void init() {
    b = new Object[64];
    a = (int[])new short[417][];
  }
  
  private static synchronized Object[] getCatalog() {
    // Byte code:
    //   0: getstatic c.a : [Ljava/lang/Object;
    //   3: ifnull -> 10
    //   6: getstatic c.a : [Ljava/lang/Object;
    //   9: areturn
    //   10: iconst_3
    //   11: anewarray java/lang/Object
    //   14: astore_0
    //   15: bipush #64
    //   17: anewarray java/lang/String
    //   20: astore_1
    //   21: bipush #64
    //   23: newarray int
    //   25: astore_2
    //   26: bipush #64
    //   28: newarray int
    //   30: astore_3
    //   31: new java/io/DataInputStream
    //   34: dup
    //   35: getstatic m.a : Ljavax/microedition/midlet/MIDlet;
    //   38: invokevirtual getClass : ()Ljava/lang/Class;
    //   41: ldc '/h'
    //   43: invokevirtual getResourceAsStream : (Ljava/lang/String;)Ljava/io/InputStream;
    //   46: invokespecial <init> : (Ljava/io/InputStream;)V
    //   49: astore #4
    //   51: iconst_0
    //   52: istore #5
    //   54: iload #5
    //   56: bipush #64
    //   58: if_icmpge -> 94
    //   61: aload_2
    //   62: iload #5
    //   64: aload #4
    //   66: invokevirtual readInt : ()I
    //   69: iastore
    //   70: aload_1
    //   71: iload #5
    //   73: aload #4
    //   75: invokevirtual readUTF : ()Ljava/lang/String;
    //   78: aastore
    //   79: aload_3
    //   80: iload #5
    //   82: aload #4
    //   84: invokevirtual readInt : ()I
    //   87: iastore
    //   88: iinc #5, 1
    //   91: goto -> 54
    //   94: aload #4
    //   96: invokevirtual close : ()V
    //   99: goto -> 103
    //   102: pop
    //   103: aload_0
    //   104: iconst_0
    //   105: aload_2
    //   106: aastore
    //   107: aload_0
    //   108: iconst_1
    //   109: aload_1
    //   110: aastore
    //   111: aload_0
    //   112: iconst_2
    //   113: aload_3
    //   114: aastore
    //   115: aload_0
    //   116: putstatic c.a : [Ljava/lang/Object;
    //   119: aload_0
    //   120: areturn
    // Exception table:
    //   from	to	target	type
    //   31	99	102	java/io/IOException
  }
  
  public static final synchronized short[] getResourceGroup(int paramInt) {
    // Byte code:
    //   0: getstatic c.c : [[S
    //   3: ifnonnull -> 117
    //   6: iconst_3
    //   7: anewarray [S
    //   10: putstatic c.c : [[S
    //   13: getstatic c.c : [[S
    //   16: iconst_2
    //   17: iconst_1
    //   18: newarray short
    //   20: aastore
    //   21: iconst_0
    //   22: anewarray [S
    //   25: putstatic c.b : [[S
    //   28: getstatic m.a : Ljavax/microedition/midlet/MIDlet;
    //   31: invokevirtual getClass : ()Ljava/lang/Class;
    //   34: ldc '/g'
    //   36: invokevirtual getResourceAsStream : (Ljava/lang/String;)Ljava/io/InputStream;
    //   39: dup
    //   40: astore_1
    //   41: ifnull -> 113
    //   44: new java/io/DataInputStream
    //   47: dup
    //   48: aload_1
    //   49: invokespecial <init> : (Ljava/io/InputStream;)V
    //   52: astore_2
    //   53: iconst_0
    //   54: istore_3
    //   55: iconst_0
    //   56: istore_3
    //   57: iload_3
    //   58: iconst_2
    //   59: if_icmpge -> 109
    //   62: aload_2
    //   63: invokevirtual readShort : ()S
    //   66: newarray short
    //   68: astore #4
    //   70: iconst_0
    //   71: istore #5
    //   73: iload #5
    //   75: aload #4
    //   77: arraylength
    //   78: if_icmpge -> 96
    //   81: aload #4
    //   83: iload #5
    //   85: aload_2
    //   86: invokevirtual readShort : ()S
    //   89: sastore
    //   90: iinc #5, 1
    //   93: goto -> 73
    //   96: getstatic c.c : [[S
    //   99: iload_3
    //   100: aload #4
    //   102: aastore
    //   103: iinc #3, 1
    //   106: goto -> 57
    //   109: aload_2
    //   110: invokevirtual close : ()V
    //   113: goto -> 117
    //   116: pop
    //   117: getstatic c.c : [[S
    //   120: iload_0
    //   121: aaload
    //   122: areturn
    // Exception table:
    //   from	to	target	type
    //   28	113	116	java/io/IOException
  }
  
  public static final void setLanguage(int paramInt) {
    a = paramInt;
  }
  
  private static void skipBytes(DataInputStream paramDataInputStream, int paramInt) throws IOException {
    for (int i = 0; i < paramInt; i = paramDataInputStream.skipBytes(paramInt - i));
  }
  
  private static byte[] readFully(DataInputStream paramDataInputStream, byte[] paramArrayOfbyte, int paramInt) throws IOException {
    for (int i = 0; i < paramInt; i = paramDataInputStream.read(paramArrayOfbyte, i, paramInt - i));
    return paramArrayOfbyte;
  }
  
  public static final synchronized Object getSpriteGroup(int paramInt) {
    getResourceGroup(2)[0] = (short)paramInt;
    return getResourceGroup(2);
  }
  
  public static final synchronized Object[] loadResources(int paramInt) {
    // Byte code:
    //   0: invokestatic getCatalog : ()[Ljava/lang/Object;
    //   3: dup
    //   4: astore_1
    //   5: iconst_1
    //   6: aaload
    //   7: checkcast [Ljava/lang/String;
    //   10: astore_2
    //   11: aload_1
    //   12: iconst_0
    //   13: aaload
    //   14: checkcast [I
    //   17: astore_3
    //   18: aload_1
    //   19: iconst_2
    //   20: aaload
    //   21: checkcast [I
    //   24: astore #4
    //   26: iload_0
    //   27: invokestatic getResourceGroup : (I)[S
    //   30: dup
    //   31: astore #5
    //   33: arraylength
    //   34: anewarray java/lang/Object
    //   37: astore #6
    //   39: aload #5
    //   41: arraylength
    //   42: anewarray java/lang/String
    //   45: astore #7
    //   47: iconst_0
    //   48: istore #9
    //   50: ldc ''
    //   52: astore #10
    //   54: aconst_null
    //   55: astore #11
    //   57: iconst_0
    //   58: istore #12
    //   60: iload #12
    //   62: aload #5
    //   64: arraylength
    //   65: if_icmpge -> 263
    //   68: aload #5
    //   70: iload #12
    //   72: saload
    //   73: dup
    //   74: istore #13
    //   76: iflt -> 257
    //   79: iload #13
    //   81: bipush #64
    //   83: if_icmple -> 89
    //   86: goto -> 257
    //   89: getstatic c.b : [Ljava/lang/Object;
    //   92: iload #13
    //   94: aaload
    //   95: ifnull -> 117
    //   98: iload #13
    //   100: ifeq -> 117
    //   103: aload #6
    //   105: iload #12
    //   107: getstatic c.b : [Ljava/lang/Object;
    //   110: iload #13
    //   112: aaload
    //   113: aastore
    //   114: goto -> 257
    //   117: aload_2
    //   118: iload #13
    //   120: aaload
    //   121: aload #10
    //   123: invokevirtual equals : (Ljava/lang/Object;)Z
    //   126: ifne -> 182
    //   129: aload #11
    //   131: ifnull -> 139
    //   134: aload #11
    //   136: invokevirtual close : ()V
    //   139: new java/io/DataInputStream
    //   142: dup
    //   143: getstatic m.a : Ljavax/microedition/midlet/MIDlet;
    //   146: invokevirtual getClass : ()Ljava/lang/Class;
    //   149: new java/lang/StringBuffer
    //   152: dup
    //   153: invokespecial <init> : ()V
    //   156: ldc '/'
    //   158: invokevirtual append : (Ljava/lang/String;)Ljava/lang/StringBuffer;
    //   161: aload_2
    //   162: iload #13
    //   164: aaload
    //   165: invokevirtual append : (Ljava/lang/String;)Ljava/lang/StringBuffer;
    //   168: invokevirtual toString : ()Ljava/lang/String;
    //   171: invokevirtual getResourceAsStream : (Ljava/lang/String;)Ljava/io/InputStream;
    //   174: invokespecial <init> : (Ljava/io/InputStream;)V
    //   177: astore #11
    //   179: iconst_0
    //   180: istore #9
    //   182: aload_3
    //   183: iload #13
    //   185: iaload
    //   186: iload #9
    //   188: isub
    //   189: istore #8
    //   191: aload #11
    //   193: iload #8
    //   195: invokestatic skipBytes : (Ljava/io/DataInputStream;I)V
    //   198: iload #9
    //   200: iload #8
    //   202: iadd
    //   203: istore #9
    //   205: aload #7
    //   207: iload #12
    //   209: aload #11
    //   211: iload #13
    //   213: aload #4
    //   215: iload #13
    //   217: iaload
    //   218: invokestatic parseResource : (Ljava/io/DataInputStream;II)Ljava/lang/String;
    //   221: aastore
    //   222: aload #7
    //   224: iload #12
    //   226: aaload
    //   227: ifnonnull -> 241
    //   230: aload #6
    //   232: iload #12
    //   234: getstatic c.b : [Ljava/lang/Object;
    //   237: iload #13
    //   239: aaload
    //   240: aastore
    //   241: iload #9
    //   243: aload #4
    //   245: iload #13
    //   247: iaload
    //   248: iadd
    //   249: istore #9
    //   251: aload_2
    //   252: iload #13
    //   254: aaload
    //   255: astore #10
    //   257: iinc #12, 1
    //   260: goto -> 60
    //   263: aload #11
    //   265: ifnull -> 273
    //   268: aload #11
    //   270: invokevirtual close : ()V
    //   273: iconst_0
    //   274: istore #12
    //   276: iload #12
    //   278: aload #7
    //   280: arraylength
    //   281: if_icmpge -> 343
    //   284: aload #7
    //   286: iload #12
    //   288: aaload
    //   289: ifnull -> 337
    //   292: aload #6
    //   294: iload #12
    //   296: new java/lang/StringBuffer
    //   299: dup
    //   300: invokespecial <init> : ()V
    //   303: ldc '/'
    //   305: invokevirtual append : (Ljava/lang/String;)Ljava/lang/StringBuffer;
    //   308: aload #7
    //   310: iload #12
    //   312: aaload
    //   313: invokevirtual append : (Ljava/lang/String;)Ljava/lang/StringBuffer;
    //   316: invokevirtual toString : ()Ljava/lang/String;
    //   319: invokestatic createImage : (Ljava/lang/String;)Ljavax/microedition/lcdui/Image;
    //   322: aastore
    //   323: getstatic c.b : [Ljava/lang/Object;
    //   326: aload #5
    //   328: iload #12
    //   330: saload
    //   331: aload #6
    //   333: iload #12
    //   335: aaload
    //   336: aastore
    //   337: iinc #12, 1
    //   340: goto -> 276
    //   343: goto -> 347
    //   346: pop
    //   347: aload #6
    //   349: areturn
    // Exception table:
    //   from	to	target	type
    //   47	343	346	java/io/IOException
  }
  
  private static String parseResource(DataInputStream paramDataInputStream, int paramInt1, int paramInt2) throws IOException {
    if (paramInt1 < 1) {
      String[] arrayOfString1 = new String[6];
      int[] arrayOfInt = new int[6];
      for (byte b1 = 0; b1 < 6; b1++) {
        arrayOfString1[b1] = paramDataInputStream.readUTF();
        arrayOfInt[b1] = paramDataInputStream.readInt();
      } 
      skipBytes(paramDataInputStream, arrayOfInt[a]);
      if (b[0] == null)
        b[0] = new String[233]; 
      String[] arrayOfString2 = (String[])b[0];
      for (byte b2 = 0; b2 < 'é'; b2++) {
        if (b == -1 || (b2 >= b && b2 <= c)) {
          arrayOfString2[b2] = paramDataInputStream.readUTF();
        } else {
          paramDataInputStream.readUTF();
        } 
        if (c != -1 && b2 > c)
          break; 
      } 
      b = -1;
      c = -1;
    } else if (paramInt1 < 58) {
      int i = 0;
      short s1 = paramDataInputStream.readShort();
      short s2 = paramDataInputStream.readShort();
      i = 0 + (s2 - s1) * 12 + 4;
      for (short s = s1; s < s2; s++) {
        short[] arrayOfShort = new short[7];
        for (byte b1 = 0; b1 < 6; b1++)
          arrayOfShort[b1] = paramDataInputStream.readShort(); 
        arrayOfShort[6] = (short)paramInt1;
        a[s] = arrayOfShort;
      } 
      byte[] arrayOfByte1 = new byte[8];
      String str = "";
      for (byte b = 0; b < 8; b++) {
        arrayOfByte1[b] = paramDataInputStream.readByte();
        if (arrayOfByte1[b] != 0)
          str = str + (char)arrayOfByte1[b]; 
      } 
      i += 8;
      if (!str.equals("")) {
        skipBytes(paramDataInputStream, paramInt2 - i);
        return str;
      } 
      byte[] arrayOfByte2 = new byte[paramInt2 - i];
      arrayOfByte2 = readFully(paramDataInputStream, arrayOfByte2, arrayOfByte2.length);
      b[paramInt1] = Image.createImage(arrayOfByte2, 0, arrayOfByte2.length);
    } else {
      byte[] arrayOfByte = new byte[paramInt2];
      arrayOfByte = readFully(paramDataInputStream, arrayOfByte, paramInt2);
      b[paramInt1] = arrayOfByte;
    } 
    return null;
  }
  
  public static final synchronized void unloadResource(int paramInt) {
    getResourceGroup(2)[0] = (short)paramInt;
    unloadGroup(2);
  }
  
  public static final synchronized void unloadGroup(int paramInt) {
    short[] arrayOfShort = getResourceGroup(paramInt);
    for (byte b = 0; b < arrayOfShort.length; b++) {
      short s;
      if ((s = arrayOfShort[b]) < 58 && s > 0) {
        for (byte b1 = 0; b1 < a.length; b1++) {
          short[] arrayOfShort1;
          if ((arrayOfShort1 = (short[])a[b1]) != null && arrayOfShort1[6] == s)
            a[b1] = null; 
        } 
        b[s] = null;
      } else {
        b[s] = null;
      } 
    } 
    System.gc();
  }
  
  public static final Object getResource(int paramInt) {
    return b[paramInt];
  }
  
  public static final String getString(int paramInt) {
    return ((String[])getResource(0))[paramInt];
  }
  
  public static final String getStringFormatted(int paramInt, String[] paramArrayOfString) {
    String str1 = getString(paramInt);
    String str2 = "";
    int i = 0;
    while (true) {
      int j = i;
      if ((i = str1.indexOf('%', i)) == -1) {
        str2 = str2 + str1.substring(j, str1.length());
      } else {
        str2 = str2 + str1.substring(j, i);
        str2 = str2 + paramArrayOfString[str1.charAt(i + 1) - 49];
        i += 2;
        continue;
      } 
      return str2;
    } 
  }
  
  public static final synchronized String[] getLanguageNames() {
    // Byte code:
    //   0: bipush #6
    //   2: anewarray java/lang/String
    //   5: astore_0
    //   6: invokestatic getCatalog : ()[Ljava/lang/Object;
    //   9: dup
    //   10: astore_1
    //   11: iconst_1
    //   12: aaload
    //   13: checkcast [Ljava/lang/String;
    //   16: iconst_0
    //   17: aaload
    //   18: astore_2
    //   19: aload_1
    //   20: iconst_0
    //   21: aaload
    //   22: checkcast [I
    //   25: iconst_0
    //   26: iaload
    //   27: istore_3
    //   28: new java/io/DataInputStream
    //   31: dup
    //   32: getstatic m.a : Ljavax/microedition/midlet/MIDlet;
    //   35: invokevirtual getClass : ()Ljava/lang/Class;
    //   38: new java/lang/StringBuffer
    //   41: dup
    //   42: invokespecial <init> : ()V
    //   45: ldc '/'
    //   47: invokevirtual append : (Ljava/lang/String;)Ljava/lang/StringBuffer;
    //   50: aload_2
    //   51: invokevirtual append : (Ljava/lang/String;)Ljava/lang/StringBuffer;
    //   54: invokevirtual toString : ()Ljava/lang/String;
    //   57: invokevirtual getResourceAsStream : (Ljava/lang/String;)Ljava/io/InputStream;
    //   60: invokespecial <init> : (Ljava/io/InputStream;)V
    //   63: dup
    //   64: astore #4
    //   66: iload_3
    //   67: invokestatic skipBytes : (Ljava/io/DataInputStream;I)V
    //   70: iconst_0
    //   71: istore #5
    //   73: iload #5
    //   75: bipush #6
    //   77: if_icmpge -> 101
    //   80: aload_0
    //   81: iload #5
    //   83: aload #4
    //   85: invokevirtual readUTF : ()Ljava/lang/String;
    //   88: aastore
    //   89: aload #4
    //   91: invokevirtual readInt : ()I
    //   94: pop
    //   95: iinc #5, 1
    //   98: goto -> 73
    //   101: aload #4
    //   103: invokevirtual close : ()V
    //   106: goto -> 110
    //   109: pop
    //   110: aload_0
    //   111: areturn
    // Exception table:
    //   from	to	target	type
    //   28	106	109	java/io/IOException
  }
  
  public static final int getSpriteData(int paramInt1, int paramInt2) {
    return a[paramInt1][paramInt2];
  }
  
  public static final void drawSprite(int paramInt1, int paramInt2, int paramInt3, Graphics paramGraphics) {
    int i;
    Image image = (Image)getResource((i = a[paramInt3])[6]);
    if (m.clipRect(paramGraphics, paramInt1 - i[4], paramInt2 - i[5], i[2], i[3], a)) {
      paramGraphics.drawImage(image, paramInt1 - i[4] - i[0], paramInt2 - i[5] - i[1], 20);
      paramGraphics.setClip(a[0], a[1], a[2], a[3]);
    } 
  }
}


/* Location:              C:\Users\erikb\Desktop\decompiler\jd-gui-windows-1.6.6\wolf_moon_176x208-106446.jar!\c.class
 * Java compiler version: 1 (45.3)
 * JD-Core Version:       1.1.3
 */