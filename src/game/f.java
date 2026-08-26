public final class f {
  private static int h = 360;
  
  private static short[] a = new short[h];
  
  private static boolean b = 0;
  
  public int[] a;
  
  public int[] b;
  
  public int[] c;
  
  public int[] d;
  
  public int[] e;
  
  public int a;
  
  public int b;
  
  public int c;
  
  public int d;
  
  public int e;
  
  public int f;
  
  public int g;
  
  public boolean a;
  
  public f(int paramInt1, int paramInt2, int paramInt3, int paramInt4, int paramInt5, int paramInt6, boolean paramBoolean) {
    this.a = paramBoolean;
    if (b == 0) {
      a();
      b = 1;
    } 
    this.a = new int[paramInt1];
    this.b = new int[paramInt1];
    this.c = new int[paramInt1];
    this.d = new int[paramInt1];
    this.e = new int[paramInt1];
    this.g = paramInt1;
    this.a = paramInt2;
    this.b = paramInt3;
    this.c = paramInt4 << 8;
    this.d = paramInt5 << 8;
    this.e = paramInt6;
    this.f = -1;
  }
  
  private static void generateSinTable() {
    int i;
    int j = (i = h) * 100000 / 2 / 314159;
    int k = j;
    int m = i * k;
    byte b = 0;
    int n = 0;
    while (b < h) {
      int i1 = n / k;
      m -= i1;
      n += m / k;
      a[b++] = (short)i1;
    } 
  }
  
  public final void spawnParticles(int paramInt1, int paramInt2, int paramInt3, int paramInt4, int paramInt5, int paramInt6, int paramInt7) {
    // Byte code:
    //   0: iconst_1
    //   1: iload_1
    //   2: iadd
    //   3: aload_0
    //   4: getfield f : I
    //   7: iadd
    //   8: aload_0
    //   9: getfield g : I
    //   12: if_icmple -> 27
    //   15: aload_0
    //   16: getfield g : I
    //   19: aload_0
    //   20: getfield f : I
    //   23: isub
    //   24: iconst_1
    //   25: isub
    //   26: istore_1
    //   27: iload_2
    //   28: sipush #16384
    //   31: imul
    //   32: istore #8
    //   34: iload_3
    //   35: sipush #16384
    //   38: imul
    //   39: istore #9
    //   41: iconst_0
    //   42: istore #13
    //   44: iload #13
    //   46: iload_1
    //   47: if_icmpge -> 212
    //   50: sipush #360
    //   53: iload #13
    //   55: imul
    //   56: iload_1
    //   57: idiv
    //   58: dup
    //   59: istore #10
    //   61: bipush #90
    //   63: iadd
    //   64: sipush #360
    //   67: if_icmplt -> 82
    //   70: iload #10
    //   72: bipush #90
    //   74: iadd
    //   75: sipush #360
    //   78: isub
    //   79: goto -> 87
    //   82: iload #10
    //   84: bipush #90
    //   86: iadd
    //   87: istore #11
    //   89: iload #5
    //   91: ifeq -> 106
    //   94: iload #4
    //   96: invokestatic nextRandom : ()I
    //   99: iload #5
    //   101: irem
    //   102: iadd
    //   103: goto -> 108
    //   106: iload #4
    //   108: istore #12
    //   110: aload_0
    //   111: dup
    //   112: getfield f : I
    //   115: iconst_1
    //   116: iadd
    //   117: putfield f : I
    //   120: aload_0
    //   121: getfield a : [I
    //   124: aload_0
    //   125: getfield f : I
    //   128: iload #7
    //   130: ifeq -> 145
    //   133: iload #6
    //   135: invokestatic nextRandom : ()I
    //   138: iload #7
    //   140: irem
    //   141: iadd
    //   142: goto -> 147
    //   145: iload #6
    //   147: iastore
    //   148: aload_0
    //   149: getfield b : [I
    //   152: aload_0
    //   153: getfield f : I
    //   156: iload #8
    //   158: iastore
    //   159: aload_0
    //   160: getfield c : [I
    //   163: aload_0
    //   164: getfield f : I
    //   167: iload #9
    //   169: iastore
    //   170: aload_0
    //   171: getfield d : [I
    //   174: aload_0
    //   175: getfield f : I
    //   178: iload #12
    //   180: getstatic f.a : [S
    //   183: iload #10
    //   185: saload
    //   186: imul
    //   187: iastore
    //   188: aload_0
    //   189: getfield e : [I
    //   192: aload_0
    //   193: getfield f : I
    //   196: iload #12
    //   198: getstatic f.a : [S
    //   201: iload #11
    //   203: saload
    //   204: imul
    //   205: iastore
    //   206: iinc #13, 1
    //   209: goto -> 44
    //   212: return
  }
  
  public final void spawnParticles(int paramInt1, int paramInt2, int paramInt3, int paramInt4, int paramInt5, int paramInt6, int paramInt7, int paramInt8, int paramInt9) {
    // Byte code:
    //   0: iconst_1
    //   1: iload_1
    //   2: iadd
    //   3: aload_0
    //   4: getfield f : I
    //   7: iadd
    //   8: aload_0
    //   9: getfield g : I
    //   12: if_icmple -> 27
    //   15: aload_0
    //   16: getfield g : I
    //   19: aload_0
    //   20: getfield f : I
    //   23: isub
    //   24: iconst_1
    //   25: isub
    //   26: istore_1
    //   27: iload_2
    //   28: sipush #16384
    //   31: imul
    //   32: istore #10
    //   34: iload_3
    //   35: sipush #16384
    //   38: imul
    //   39: istore #11
    //   41: iconst_0
    //   42: istore #15
    //   44: iload #15
    //   46: iload_1
    //   47: if_icmpge -> 249
    //   50: iload #6
    //   52: invokestatic nextRandom : ()I
    //   55: iload #7
    //   57: iconst_2
    //   58: idiv
    //   59: iconst_1
    //   60: iadd
    //   61: irem
    //   62: iadd
    //   63: dup
    //   64: istore #12
    //   66: iload #12
    //   68: sipush #360
    //   71: if_icmplt -> 80
    //   74: sipush #360
    //   77: goto -> 81
    //   80: iconst_0
    //   81: isub
    //   82: dup
    //   83: istore #12
    //   85: iload #12
    //   87: ifge -> 96
    //   90: sipush #360
    //   93: goto -> 97
    //   96: iconst_0
    //   97: iadd
    //   98: dup
    //   99: istore #12
    //   101: bipush #90
    //   103: iadd
    //   104: sipush #360
    //   107: if_icmplt -> 119
    //   110: iload #12
    //   112: sipush #270
    //   115: isub
    //   116: goto -> 124
    //   119: iload #12
    //   121: bipush #90
    //   123: iadd
    //   124: istore #13
    //   126: iload #5
    //   128: ifeq -> 143
    //   131: iload #4
    //   133: invokestatic nextRandom : ()I
    //   136: iload #5
    //   138: irem
    //   139: iadd
    //   140: goto -> 145
    //   143: iload #4
    //   145: istore #14
    //   147: aload_0
    //   148: dup
    //   149: getfield f : I
    //   152: iconst_1
    //   153: iadd
    //   154: putfield f : I
    //   157: aload_0
    //   158: getfield a : [I
    //   161: aload_0
    //   162: getfield f : I
    //   165: iload #9
    //   167: ifeq -> 182
    //   170: iload #8
    //   172: invokestatic nextRandom : ()I
    //   175: iload #9
    //   177: irem
    //   178: iadd
    //   179: goto -> 184
    //   182: iload #8
    //   184: iastore
    //   185: aload_0
    //   186: getfield b : [I
    //   189: aload_0
    //   190: getfield f : I
    //   193: iload #10
    //   195: iastore
    //   196: aload_0
    //   197: getfield c : [I
    //   200: aload_0
    //   201: getfield f : I
    //   204: iload #11
    //   206: iastore
    //   207: aload_0
    //   208: getfield d : [I
    //   211: aload_0
    //   212: getfield f : I
    //   215: iload #14
    //   217: getstatic f.a : [S
    //   220: iload #12
    //   222: saload
    //   223: imul
    //   224: iastore
    //   225: aload_0
    //   226: getfield e : [I
    //   229: aload_0
    //   230: getfield f : I
    //   233: iload #14
    //   235: getstatic f.a : [S
    //   238: iload #13
    //   240: saload
    //   241: imul
    //   242: iastore
    //   243: iinc #15, 1
    //   246: goto -> 44
    //   249: return
  }
  
  public final void spawnHomingParticles(int paramInt1, int paramInt2, int paramInt3, int paramInt4, int paramInt5, int paramInt6, int paramInt7, int paramInt8, int paramInt9, int paramInt10, int paramInt11, int paramInt12, int paramInt13, boolean paramBoolean) {
    // Byte code:
    //   0: iconst_1
    //   1: iload_1
    //   2: iadd
    //   3: aload_0
    //   4: getfield f : I
    //   7: iadd
    //   8: aload_0
    //   9: getfield g : I
    //   12: if_icmple -> 27
    //   15: aload_0
    //   16: getfield g : I
    //   19: aload_0
    //   20: getfield f : I
    //   23: isub
    //   24: iconst_1
    //   25: isub
    //   26: istore_1
    //   27: iload #4
    //   29: iload_2
    //   30: isub
    //   31: istore #16
    //   33: iload #5
    //   35: iload_3
    //   36: isub
    //   37: istore #17
    //   39: iconst_0
    //   40: istore #21
    //   42: iload #21
    //   44: iload_1
    //   45: if_icmpge -> 250
    //   48: iload_2
    //   49: invokestatic nextRandom : ()I
    //   52: iload #16
    //   54: iconst_1
    //   55: iadd
    //   56: irem
    //   57: invokestatic abs : (I)I
    //   60: iadd
    //   61: istore #22
    //   63: iload_3
    //   64: invokestatic nextRandom : ()I
    //   67: iload #17
    //   69: iconst_1
    //   70: iadd
    //   71: irem
    //   72: invokestatic abs : (I)I
    //   75: iadd
    //   76: istore #23
    //   78: iload #22
    //   80: istore #24
    //   82: iload #23
    //   84: iload #9
    //   86: iadd
    //   87: istore #25
    //   89: iload #10
    //   91: iload #11
    //   93: getstatic i.a : Ljava/util/Random;
    //   96: invokestatic randomInt : (IILjava/util/Random;)I
    //   99: dup
    //   100: istore #15
    //   102: getstatic f.a : [S
    //   105: bipush #90
    //   107: saload
    //   108: imul
    //   109: istore #15
    //   111: iload #24
    //   113: iload #22
    //   115: isub
    //   116: istore #18
    //   118: iload #25
    //   120: iload #23
    //   122: isub
    //   123: istore #19
    //   125: iload #18
    //   127: iload #18
    //   129: imul
    //   130: iload #19
    //   132: iload #19
    //   134: imul
    //   135: iadd
    //   136: invokestatic sqrt : (I)I
    //   139: istore #20
    //   141: aload_0
    //   142: dup
    //   143: getfield f : I
    //   146: iconst_1
    //   147: iadd
    //   148: putfield f : I
    //   151: aload_0
    //   152: getfield a : [I
    //   155: aload_0
    //   156: getfield f : I
    //   159: iload #13
    //   161: ifeq -> 177
    //   164: iload #12
    //   166: iload #13
    //   168: getstatic i.a : Ljava/util/Random;
    //   171: invokestatic randomInt : (IILjava/util/Random;)I
    //   174: goto -> 179
    //   177: iload #12
    //   179: iastore
    //   180: aload_0
    //   181: getfield b : [I
    //   184: aload_0
    //   185: getfield f : I
    //   188: iload #22
    //   190: sipush #16384
    //   193: imul
    //   194: iastore
    //   195: aload_0
    //   196: getfield c : [I
    //   199: aload_0
    //   200: getfield f : I
    //   203: iload #23
    //   205: sipush #16384
    //   208: imul
    //   209: iastore
    //   210: aload_0
    //   211: getfield d : [I
    //   214: aload_0
    //   215: getfield f : I
    //   218: iload #15
    //   220: iload #18
    //   222: imul
    //   223: iload #20
    //   225: idiv
    //   226: iastore
    //   227: aload_0
    //   228: getfield e : [I
    //   231: aload_0
    //   232: getfield f : I
    //   235: iload #15
    //   237: iload #19
    //   239: imul
    //   240: iload #20
    //   242: idiv
    //   243: iastore
    //   244: iinc #21, 1
    //   247: goto -> 42
    //   250: return
  }
  
  public final void update(int paramInt) {
    // Byte code:
    //   0: iconst_0
    //   1: istore #5
    //   3: iload #5
    //   5: aload_0
    //   6: getfield f : I
    //   9: iconst_1
    //   10: iadd
    //   11: if_icmpge -> 342
    //   14: aload_0
    //   15: getfield a : [I
    //   18: iload #5
    //   20: iaload
    //   21: iload_1
    //   22: isub
    //   23: dup
    //   24: istore_2
    //   25: iconst_1
    //   26: if_icmpge -> 183
    //   29: aload_0
    //   30: getfield a : Z
    //   33: ifeq -> 65
    //   36: aload_0
    //   37: getfield b : [I
    //   40: iload #5
    //   42: iaload
    //   43: aload_0
    //   44: getfield c : [I
    //   47: iload #5
    //   49: iaload
    //   50: aload_0
    //   51: getfield e : [I
    //   54: iload #5
    //   56: iaload
    //   57: bipush #15
    //   59: ishr
    //   60: iload #5
    //   62: invokestatic a : (IIII)V
    //   65: iload #5
    //   67: aload_0
    //   68: getfield f : I
    //   71: if_icmpne -> 87
    //   74: aload_0
    //   75: dup
    //   76: getfield f : I
    //   79: iconst_1
    //   80: isub
    //   81: putfield f : I
    //   84: goto -> 336
    //   87: aload_0
    //   88: getfield a : [I
    //   91: iload #5
    //   93: aload_0
    //   94: getfield a : [I
    //   97: aload_0
    //   98: getfield f : I
    //   101: iaload
    //   102: iastore
    //   103: aload_0
    //   104: getfield b : [I
    //   107: iload #5
    //   109: aload_0
    //   110: getfield b : [I
    //   113: aload_0
    //   114: getfield f : I
    //   117: iaload
    //   118: iastore
    //   119: aload_0
    //   120: getfield c : [I
    //   123: iload #5
    //   125: aload_0
    //   126: getfield c : [I
    //   129: aload_0
    //   130: getfield f : I
    //   133: iaload
    //   134: iastore
    //   135: aload_0
    //   136: getfield d : [I
    //   139: iload #5
    //   141: aload_0
    //   142: getfield d : [I
    //   145: aload_0
    //   146: getfield f : I
    //   149: iaload
    //   150: iastore
    //   151: aload_0
    //   152: getfield e : [I
    //   155: iload #5
    //   157: aload_0
    //   158: getfield e : [I
    //   161: aload_0
    //   162: getfield f : I
    //   165: iaload
    //   166: iastore
    //   167: aload_0
    //   168: dup
    //   169: getfield f : I
    //   172: iconst_1
    //   173: isub
    //   174: putfield f : I
    //   177: iinc #5, -1
    //   180: goto -> 336
    //   183: aload_0
    //   184: getfield a : [I
    //   187: iload #5
    //   189: iload_2
    //   190: iastore
    //   191: aload_0
    //   192: getfield e : I
    //   195: ifeq -> 252
    //   198: aload_0
    //   199: getfield d : [I
    //   202: iload #5
    //   204: dup2
    //   205: iaload
    //   206: aload_0
    //   207: getfield d : [I
    //   210: iload #5
    //   212: iaload
    //   213: aload_0
    //   214: getfield e : I
    //   217: imul
    //   218: iload_1
    //   219: imul
    //   220: bipush #14
    //   222: ishr
    //   223: isub
    //   224: iastore
    //   225: aload_0
    //   226: getfield e : [I
    //   229: iload #5
    //   231: dup2
    //   232: iaload
    //   233: aload_0
    //   234: getfield e : [I
    //   237: iload #5
    //   239: iaload
    //   240: aload_0
    //   241: getfield e : I
    //   244: imul
    //   245: iload_1
    //   246: imul
    //   247: bipush #14
    //   249: ishr
    //   250: isub
    //   251: iastore
    //   252: aload_0
    //   253: getfield d : [I
    //   256: iload #5
    //   258: dup2
    //   259: iaload
    //   260: aload_0
    //   261: getfield a : I
    //   264: iload_1
    //   265: imul
    //   266: iadd
    //   267: iastore
    //   268: aload_0
    //   269: getfield e : [I
    //   272: iload #5
    //   274: dup2
    //   275: iaload
    //   276: aload_0
    //   277: getfield b : I
    //   280: iload_1
    //   281: imul
    //   282: iadd
    //   283: iastore
    //   284: aload_0
    //   285: getfield b : [I
    //   288: iload #5
    //   290: dup2
    //   291: iaload
    //   292: aload_0
    //   293: getfield d : [I
    //   296: iload #5
    //   298: iaload
    //   299: aload_0
    //   300: getfield c : I
    //   303: iadd
    //   304: iload_1
    //   305: imul
    //   306: iconst_4
    //   307: ishr
    //   308: iadd
    //   309: iastore
    //   310: aload_0
    //   311: getfield c : [I
    //   314: iload #5
    //   316: dup2
    //   317: iaload
    //   318: aload_0
    //   319: getfield e : [I
    //   322: iload #5
    //   324: iaload
    //   325: aload_0
    //   326: getfield d : I
    //   329: iadd
    //   330: iload_1
    //   331: imul
    //   332: iconst_4
    //   333: ishr
    //   334: iadd
    //   335: iastore
    //   336: iinc #5, 1
    //   339: goto -> 3
    //   342: return
  }
  
  public static final int sqrt(int paramInt) {
    int i = 0;
    int j = 32768;
    int k = 15;
    while (true) {
      int m;
      if (paramInt >= (m = (i << 1) + j << k--)) {
        i += j;
        paramInt -= m;
      } 
      if ((j >>= 1) == 0)
        return i; 
    } 
  }
  
  private static int nextRandom() {
    return i.a.nextInt();
  }
}


/* Location:              C:\Users\erikb\Desktop\decompiler\jd-gui-windows-1.6.6\wolf_moon_176x208-106446.jar!\f.class
 * Java compiler version: 1 (45.3)
 * JD-Core Version:       1.1.3
 */
