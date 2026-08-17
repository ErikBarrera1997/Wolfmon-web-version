import { Screen } from './p.js';

export class i extends Screen {
  static u = [];
  v = [];
  d = [];
  e = [];
  a = -1;
  M = 0;

  aTiles = [385, 386, 387];
  bTiles = [389, 388, 390];
  cTiles = [391, 393, 395];
  dTiles = [392, 394, 401];
  eTiles = [396, 403];
  fTiles = [397, 402];
  gTiles = [398, 400, 405];
  hTiles = [399, 406, 404];

  uFlag = false;
  vFlag = false;
  wFlag = false;
  N = 0;
  vByte = 0;
  eInt = 0;
  fInt = 0;
  gInt = 0;
  hInt = 0;
  iInt = 0;
  jInt = 0;
  wArr = Array(7).fill(0);
  mArr = Array(4).fill(0);
  kInt = 0;
  xFlag = false;
  yFlag = false;
  O = 0;
  aBool = false;
  bBool = false;
  zFlag = false;

  nArr = Array(8).fill(-1);
  DArr = Array(8).fill(0);
  oArr = Array(8).fill(-1);
  EArr = Array(8).fill(0);
  P = 0;
  Q = 0;
  AFlag = false;
  BFlag = false;
  CFlag = false;
  DFlag = false;
  EFlag = false;
  FFlag = false;
  R = 0;
  S = 0;
  xArr = [];
  yArr = [];
  zArr = [];
  AArr = [];
  BArr = [];
  CArr = [];
  GFlag = false;
  wByte = 0;
  T = 0;
  lInt = 0;
  FBytes = [];
  HFlag = false;
  xByteVal = 0;
  IFlag = false;
  yByteVal = 0;
  zByteVal = 0;
  JFlag = false;
  KFlag = false;
  LFlag = false;
  MFlag = false;
  NFlag = false;
  OFlag = false;
  PFlag = false;
  QFlag = false;
  RFlag = false;
  SFlag = false;
  TFlag = false;
  UFlag = false;
  VFlag = false;
  WFlag = false;
  XFlag = false;
  YFlag = false;
  ZFlag = false;
  aa = false;
  ab = false;
  ac = false;
  ad = false;
  ae = false;
  af = false;
  ag = false;
  ah = false;
  ai = false;
  aj = false;
  ak = false;
  al = false;
  am = false;

  cBool = false;
  dBool = false;
  eBool = false;
  U = 0;
  mInt = 0;
  fBool = false;

  iSeq = [11, 14, 12, 11, 13, 12];
  jSeq = [88, 176, 88, 88, 176, 88];
  kSeq = [270, 271, 272, 273, 274, 275];
  lSeq = [282, 283, 284, 285, 286, 287];
  mSeq = [276, 277, 278, 279, 280, 281];

  aMatrix = [[3, 4, 4, 4, 5], [-1, 3, 4, 5, -1], [-1, -1, 4, -1, -1]];
  bMatrix = [[-1, -1, 0, -1, -1], [-1, 1, 0, 7, -1], [1, 0, 0, 0, 7]];
  cMatrix = [[-1, -1, 5], [-1, 5, 6], [6, 6, 6], [-1, 7, 6], [-1, -1, 7]];
  dMatrix = [[3, -1, -1], [2, 3, -1], [2, 2, 2], [2, 1, -1], [1, -1, -1]];
  eMatrix = [[4, 5, 5], [4, 5, 5], [5, 6, 6]];
  fMatrix = [[7, 6, 6], [0, 7, 7], [0, 7, 7]];
  gMatrix = [[2, 2, 1], [1, 1, 0], [1, 1, 0]];
  hMatrix = [[3, 3, 4], [3, 3, 4], [2, 2, 3]];

  byteA = 0;
  byteArrA = [];
  nVals = [75, 76, 77];
  oVals = [407, 408, 409, 410, 411];
  pVals = [412, 413, 414, 415, 416];
  qVals = [69, 70, 71];
  rVals = [78, 79, 80];
  longA = 0;
  intArrA = [-35, 100, -30, 60, -25, 20, 83, 20, 88, 60, 93, 100];
  intArrB = [83, 20, 88, 60, 93, 100, -35, 100, -30, 60, -25, 20];
  intArrC = [16777215, 10066329, 6710886];
  byteArrB = [128, 9, -117, 1, -114, 3, -121, 25, -121, 31, -118, 38, -115, 59, -104, 87, -98, 59, -88, 65, -87, 104, -85, 100, -84, 83, -82, 38, -79, 33, -75, 52, -74, 60, -74, 40, -73, 68, -69, 73, -56, 108, -53, 69, -52, 61, -50, 56, -46, 40, -45, 53, -44, 75, -44, 109, -43, 44, -34, 105, -28, 85, -27, 72, -22, 50, -22, 61, -19, 4, -17, 63, -16, 9, 2, 38, 5, 51, 10, 35, 13, 80, 26, 99, 29, 35, 30, 30, 31, 59, 32, 106, 34, 102, 36, 106, 38, 89, 38, 39, 38, 49, 40, 42, 41, 90, 43, 4, 44, 19, 45, 59, 48, 41, 48, 70, 49, 30, 49, 69, 49, 76, 50, 60, 50, 93, 51, 97, 53, 79, 54, 75, 55, 19, 60, 43, 64, 57, 65, 58, 66, 70, 67, 59, 68, 100, 70, 45, 72, 25, 72, 56, 78, 29, 79, 20, 81, 44, 84, 62, 86, 43, 86, 95, 89, 30, 91, 48, 91, 68, 94, 27, 94, 61, 97, 36, 96, 41, 98, 55, 100, 88, 101, 93, 101, 62, 102, 52, 104, 53, 104, 77, 107, 52, 108, 70, 112, 85, 118, 55, 121, 56, 121, 62, 120, 105, 126, 60];
  byteArrC = [2, 2, 1, 3, 2, 3, 1, 2, 1, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 1, 3, 2, 1, 3, 1, 3, 1, 2, 3, 3, 3, 2, 1, 3, 2, 3, 2, 1, 1, 1, 3, 1, 3, 2, 3, 1, 2, 3, 2, 2, 2, 2, 3, 2, 3, 1, 2, 2, 1, 3, 1, 2, 1, 2, 1, 3, 3, 2, 3, 2, 2, 2, 2, 1, 3, 3, 1, 2, 2, 3, 2, 3, 1, 1, 1, 3, 2, 2, 1, 2, 1, 1, 2, 2, 1, 3, 2, 1, 3, 2, 3, 3, 1, 1, 3, 1, 2];
  byteArrD = [-96, -32, 32, 96];

  eBytes = [];
  fBytes = [];
  nInt = 0;
  oInt = 0;
  pInt = 0;
  qInt = 0;
  rInt = 0;
  sInt = 0;
  tableA = [];
  arrD = [];
  arrE = [];
  tInt = 0;
  uInt = 41;
  vInt = 45;
  wInt = 20;
  xInt = 20;
  yInt = 2;
  anFlag = false;
  randomA = null;
  randomB = null;
  randomC = null;
  fArr = [];
  shortS = [];
  gBytes = [];
  bByte = 0;
  cByte = 0;
  dByte = 0;
  eByte = 0;
  fByte = 0;
  gByte = 0;
  hByte = 0;
  matrixA = [[7, 0, 1], [6, -1, 2], [5, 4, 3]];
  gVals = [89, 90, 91, 92, 93, 94, 95, 88];
  zVal = 0;
  AVal = 0;
  iByte = 0;
  hBytes = [];
  iBytes = [];
  jBytes = [];
  kBytes = [];
  lBytes = [];
  mBytes = [];
  nBytes = [];
  oBytes = [];
  boolA = [];
  BVal = 0;
  jByte = 0;
  kByte = 0;
  lByte = 0;
  pBytes = [];
  qBytes = [];
  gFlag = false;
  hVals = [1, 1, 2, 4, 4, 1, 1, 2, 2];
  iVals = [5, 1, 5, 20, 15, 20, 1, 5, 10];
  jVals = [10, 10, 15, 30, 25, 30, 1, 15, 20];
  rBytes = [];
  sBytes = [];
  tBytes = [];
  uBytes = [];
  vBytes = [];
  wBytes = [];
  xBytes = [];
  yBytes = [];
  zBytes = [];
  ABytes = [];
  boolB = [];
  imageA = null;
  imageB = null;
  graphicsA = null;
  graphicsB = null;
  hBool = false;
  iBool = false;
  CVal = 0;
  mByte = 0;
  nByte = 0;
  jFlag = false;
  kFlag = false;
  lFlag = false;
  mFlag = false;
  boolC = [];
  DVal = 0;
  EVal = 0;
  nFlag = false;
  FVal = 0;
  oFlag = false;
  pFlag = false;
  oByte = 0;
  pByte = 0;
  qFlag = false;
  BBytes = [];
  qByte = 0;
  rFlag = false;
  rByte = -1;
  GVal = 0;
  kArr = [];
  HVal = 0;
  CBytes = [];
  tShort = [];
  sByte = 0;
  tByte = 0;
  uByte = 0;
  sBool = false;
  IVal = 0;
  JVal = 0;
  KVal = 0;
  LVal = 0;
  tFlag = false;
  iMatrix = [[17, 4], [27, 9], [31, 18], [27, 28], [17, 33], [6, 28], [2, 18], [6, 9]];
  bMatrix2 = [[211, 212, 213, 214], [212, 213, 214, 211], [213, 214, 211, 212], [214, 211, 212, 213]];
  lVals = [0, 1, 1, 2, 2, 3, 3, 0];

  V = 0;
  W = 0;
  AByte = 0;
  pArr = [];
  qArr = [];
  rArr = [];
  GBytes = [];
  XVal = 0;
  YVal = 0;
  BByte = 0;
  CByte = 0;
  cObj = null;
  DShort = [];
  sArr = Array(20).fill(0);
  tArr = Array(20).fill(0);
  ZVal = 0;
  DByte = 0;
  aaInt = 0;
  EByte = 0;
  aoFlag = false;

  iArray = [];
  jArray = [];
  kArray = [];
  title = '';

  constructor() {
    super();
  }

  b(paramInt) {
    let arr = this.b ?? [];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = false;
    }
    switch (paramInt) {
      case 5:
        this.d();
        this.m?.a?.(20, this);
        return;
      case 3:
      case 14:
        arr[2] = true;
        return;
      case 4:
      case 16:
        arr[3] = true;
        return;
      case 1:
      case 12:
        arr[0] = true;
        return;
      case 2:
      case 18:
        arr[1] = true;
        return;
      case 7:
      case 15:
        arr[4] = true;
        return;
      case 11:
        arr[7] = true;
        return;
      case 17:
        arr[5] = true;
        return;
      case 19:
        arr[6] = true;
        return;
      case 13:
        arr[8] = true;
        break;
    }
  }

  c(paramInt) {
    if (this.an) return;
    this.z = false;
    if (this.F !== 0) {
      if (this.E === 0 && this.u === 0) {
        this.b(true);
      } else if (this.u !== 0) {
        this.k();
        this.w();
        this.F = 0;
        this.u = 0;
        this.b(false);
      }
    }

    if (this.G !== null) {
      if (this.E === 0 && this.w === null) {
        let bool = true;
        for (let i = 0; i < this.d.length; i++) {
          if (this.d[i] === 152) {
            bool = false;
            break;
          }
        }
        if (bool) {
          this.b(true);
        } else {
          this.x();
        }
      } else if (this.w === true) {
        this.T += paramInt;
        if (this.T > 300) {
          this.T = false;
          this.w = 2;
        }
      } else if (this.w === 2 && this.E === 0) {
        this.T += paramInt;
        if (this.T > 300) {
          this.T = false;
          this.b(false);
        }
      }
    }

    if (paramInt <= 0) paramInt = 1;
    this.a += paramInt;
    this.e(paramInt);
    this.aInt(paramInt);
    this.j();
    if (this.r !== null && this.l === null) {
      this.z[this.q] = 2;
      let arrayOfString = this.aValue(this.w[this.q], 1);
      this.r = false;
      this.aCall(79, arrayOfString, this.aValue(this.w[this.q]));
    }

    if (!this.j && !this.g) {
      this.g = true;
      this.b(false, null);
      this.b(true, this.a);
      this.t();
    } else if (this.z !== null) {
      this.b(true, this.a);
    }

    this.aCall(true, this.a);
    if (this.r !== -1) {
      this.d();
      this.h.b = this.r;
      if (this.r === 8) this.y();
      this.m?.a?.(18, this);
      return;
    }

    if (this.G !== null) {
      if (this.w === true) this.x();
    } else {
      this.x();
    }

    this.x(paramInt);
    this.M += paramInt;
    if (this.M > 300) {
      this.M = false;
      for (let i = 0; i < this.u.length; i++) {
        if (this.d[i] !== 0 && this.aRandom(0, 100, this.a) < 20) {
          this.d[i] = 0;
        } else if (this.d[i] === 0 && this.aRandom(0, 100, this.a) < 8) {
          this.d[i] = 1;
        }
      }
    }

    this.h.e();
    this.y(paramInt);
    if (this.C <= 20) {
      this.L += paramInt;
      if (this.L > 250) {
        this.L = 0;
        this.t = (this.t === null) ? 1 : 0;
        return;
      }
    } else if (this.C > 20 && this.t !== null) {
      this.t = false;
    }
  }

  static aInt(paramInt) {
    switch (paramInt) {
      case 6: return 42;
      case 15: return 54;
      case 4: return 55;
      case 1: return 57;
      case 9: return 46;
      case 12: return 64;
      case 3: return 51;
      case 16: return 81;
      case 13: return 62;
      case 17: return 39;
      case 21: return 59;
      case 8: return 52;
      case 5: return 41;
      case 14: return 40;
      case 0: return 48;
      case 2: return 37;
      case 18: return 38;
      case 19: return 49;
      case 20: return 47;
      case 10: return 60;
      case 7: return 56;
      case 24: return 45;
      case 11: return 63;
      default: return -1;
    }
  }

  static aBooleanGraphics(paramBoolean, paramGraphics) {
    if (this.m === -1) return;
    if (!this.m && this.f === 0) {
      if (paramBoolean) this.aCall(60, null, -1);
    } else if (this.m === 3 && this.f === 0) {
      if (paramBoolean) {
        this.aCall(8, 1);
        this.aCall(61, null, 32);
      }
    } else if (this.m === 4 && this.f === 0) {
      if (paramBoolean) {
        this.C[3] = 104;
        this.aCall(62, null, 75);
      }
    }
  }

  static aStep(paramInt) {
    if (this.o !== 0 && this.D > 0 && this.D < 600) {
      this.y();
      this.q();
      return;
    }
  }

  static eUpdate(paramInt) {
    if (!this.aCheck()) {
      if (this.r === -1) {
        this.s += paramInt;
        if (this.s >= 41) {
          if (this.aRandom(0, 1000, this.a) <= 50) {
            this.r = false;
            this.n = this.aRandom(26, 31, this.a);
            if (this.aRandom(0, 100, this.a) <= 50) this.n = -this.n;
            this.o = this.aRandom(0, 5, this.a) + 3;
            this.p = this.aRandom(0, 45056, this.a);
            this.q = this.aRandom(0, this.H << 8 >> 1, this.a);
          }
          this.s = false;
          return;
        }
      } else {
        this.r += paramInt;
        if (this.r >= 41) {
          this.r = -1;
          return;
        }
        this.p += this.n * paramInt;
        this.q += this.o * paramInt;
        if (this.p < 0 || this.p > 1000 || this.q < 0 || this.q > this.H << 8) {
          this.r = -1;
        }
      }
    }
  }

  static iCheck() {
    if (this.l !== null) {
      let j = this.aValue(this.d, this.e, 0, 7);
      switch (this.h[j]) {
        case false:
        case true:
          if (this.aCheck() && (j === 0 || j === 3)) {
            if (this.C === 0) {
              if (!this.h[j] && this.A === 0) {
                this.aCall(170, null, -1);
                this.A = 1;
              } else if (this.h[j] === 4 && this.B === 0) {
                this.aCall(171, null, 36);
                this.B = 1;
              }
            }
            this.v(61);
            this.m();
            return;
          }
          if (this.e === 0) {
            this.aCall(111, null, 32);
            return;
          }
          break;
        default:
          if (this.h[j] === 5) {
            let bool = true;
            for (let i = 0; i < this.A.length; i += 2) {
              if (this.A[i] === 19 && this.A[i + 1] >= 1) {
                bool = false;
              } else if (this.A[i] === 24 && this.A[i + 1] >= 1) {
                bool = false;
              }
            }
            if (bool) {
              this.aCall(100, 100, false);
              return;
            }
          }
          break;
      }
    }
  }
  
  static j() {
    if (this.F !== 0 || this.t !== null || this.C <= 0 || this.y !== null || this.x !== null || this.m === 5 || (this.m === 6 && this.l === null) || this.m === 7 || this.m === 8) {
      return;
    }
    if (this.D <= 0) {
      if (!this.j) {
        let b1;
        let bool = this.h;
        let b2 = this.d;
        let b3 = this.e;
        if (this.b[2] !== null) {
          b1 = bool - 1;
          this.b[2] = false;
        } else if (this.b[3] !== null) {
          b1 = b1 + 1;
          this.b[3] = false;
        } else if (this.b[0] !== null) {
          this.b[0] = false;
          switch (b1) {
            case 0:
              b3 -= 1;
              break;
            case 1:
              b2 += 1;
              b3 -= 1;
              break;
            case 2:
              b2 += 1;
              break;
            case 3:
              b2 += 1;
              b3 += 1;
              break;
            case 4:
              b3 += 1;
              break;
            case 5:
              b2 -= 1;
              b3 += 1;
              break;
            case 6:
              b2 -= 1;
              break;
            case 7:
              b2 -= 1;
              b3 -= 1;
              break;
          }
        } else if (this.b[1] !== null) {
          b1 = b1 + 4;
          this.b[1] = false;
        }
        if (b1 < 0) {
          b1 += 8;
        } else if (b1 > 7) {
          b1 -= 8;
        }
        if (b2 === 27 && b3 === 39 && this.a !== null && this.b !== null && this.C !== 0) {
          this.x = true;
          this.v();
          this.h.a();
          this.r = 7;
        } else if (b3 < 0 || b3 >= this.c) {
          if (this.C !== 0) {
            this.a(211, null, -1);
          } else {
            this.a(165, null, 32);
          }
        }
        if ((b2 !== this.d || b3 !== this.e) && this.bCheck(b2, b3)) {
          this.h.d();
          if (this.A !== 0 && this.aTile(b2, b3, 0, 7) !== 7) {
            for (let i = 0; i < this.a.g; i++) {
              this.p[i] = 0;
              this.q[i] = 0;
              this.G[i] = 0;
              this.r[i] = 0;
            }
            this.X = 0;
          }
          if (this.e !== 0) {
            let j = this.aTile(b2, b3, 0, 7);
            let k = this.aTile(b2, b3, 13, 57344);
            if ((j === 3 || j === 0) && k === 3) {
              this.f = this.d;
              this.g = this.e;
              this.d = b2;
              this.e = b3;
              this.u();
              this.s[this.S] = this.d;
              this.t[this.S] = this.e;
              this.g = false;
              this.u1(1);
              this.n();
              this.bPaint(null);
              return;
            }
            this.a(116, null, 32);
          } else {
            this.c = false;
            this.d = 0;
            this.r = -1;
            this.f = this.d;
            this.g = this.e;
            this.d = b2;
            this.e = b3;
            this.u();
            if (this.J === 0 && this.m === -1) {
              this.J = 1;
              this.v = true;
              this.a(72, null, 86);
            }
            if (this.I !== 0 && this.D === 0) {
              this.D = 1;
              this.r = 9;
              this.tAction(216);
              if (!this.Q) this.tAction(122);
              if (this.H !== 0) {
                if (this.O) {
                  this.tAction(220);
                } else {
                  this.tAction(219);
                }
              }
            }
            let j;
            if ((j = this.aTile(this.d, this.e, 13, 57344)) === 2 || j === 4) {
              if (!this.M) {
                this.a(75, null, 32);
                this.M = true;
              }
              if (this.bTile(this.d, this.e, 20) || j === 4) {
                for (let i = 0; i < this.w.length; i++) {
                  if (this.z[i] === 2 && this.w[i] === 20) {
                    this.iAction(16);
                    break;
                  }
                }
                if (j === 4 && this.L === 0) {
                  this.a(148, null, 32);
                  this.L = 1;
                }
                this.a(76, null, 32);
              } else {
                this.a(77, null, 32);
              }
            }
            if (this.m !== -1 && this.U > this.e) {
              this.U = this.e;
              this.m += 1;
              this.f = 0;
            }
            this.g = false;
            this.u1(1);
            this.f1(1);
            if (this.m === -1) {
              this.aFunc(this.f, this.g);
              this.jAction(1);
              this.rAction();
              this.sAction();
            }
            this.n();
            if (this.m === -1) {
              this.i();
              this.l();
            }
            this.bPaint(null);
            if (this.w === null && this.N + 48 <= this.z && this.t === null && this.r === null && this.C === 0) {
              this.w = true;
              this.a(230, null, 58);
            }
            return;
          }
        } else if (b1 !== this.h) {
          this.h.d();
          if (this.A !== 0 && this.aTile(b2, b3, 0, 7) !== 7) {
            for (let i = 0; i < this.a.g; i++) {
              this.p[i] = 0;
              this.q[i] = 0;
              this.G[i] = 0;
              this.r[i] = 0;
            }
            this.X = 0;
          }
          this.z = true;
          this.r = -1;
          this.h = b1;
          this.bPaint(null);
          return;
        }
      }
      if (this.b[4] !== null) {
        this.b[4] = false;
        let b = this.A[this.o * 2 + 1];
        let j = this.o * 2;
        let k = this.aTile(this.d, this.e, 13, 57344);
        if (this.h) {
          this.h = false;
        } else if (this.o === this.p && (this.l === null || this.c !== null || this.e !== 0 || k === 2 || k === 4) && this.m === -1 && this.aTile(this.d, this.e, 0, 7) !== 7) {
          if (this.C !== 0) {
            this.a(224, null, -1);
          } else if ((k === null || this.c !== null || this.e !== 0 || k === 2 || k === 4) && !this.aTileCheck(this.d, this.e, 5)) {
            this.a(95, null, 32);
            this.F = 1;
            this.u = 0;
          } else {
            this.a(203, null, 32);
          }
        }
      }
      if (this.b[8] !== null) {
        this.b[8] = false;
        this.h = !this.h;
        return;
      }
      if (this.b[7] !== null) {
        this.b[7] = false;
        if (this.G !== null && !this.h) {
          this.v = false;
          this.i = true;
          this.h.c();
          return;
        }
      } else {
        if (this.b[5] !== null) {
          this.b[5] = false;
          this.hMove(-1);
          return;
        }
        if (this.b[6] !== null) {
          this.b[6] = false;
          this.hMove(1);
          return;
        }
      }
    } else {
      for (let i = 0; i < this.b.length; i++) {
        this.b[i] = false;
      }
    }
  }

  static bValue(paramInt) {
    switch (paramInt) {
      case 201: return 44;
      case 104: return 34;
      case 105: return 29;
      case 106: return 28;
      case 107: return 30;
      case 108: return 31;
      case 109: return 36;
      case 110: return 35;
      default: return -1;
    }
  }

  static cValue(paramInt) {
    let j;
    let bool;
    let b = 1;
    if (this.B === 5) return (paramInt === 19) ? 1 : 0;
    switch (paramInt) {
      case 25:
        bool = false;
        j = this.aTile(this.d, this.e, 0, 7);
        if (j === 4 || j === 1 || j === 5 || j === 2) bool = true;
        if (this.aCheck()) {
          b = 2;
          if (bool) b += 1;
        } else {
          b = 4;
          if (bool) b += 2;
        }
        return b;
      case 22:
        if (this.aCheck()) b += 1;
        j = this.aTile(this.d, this.e, 0, 7);
        if (this.m === -1 && (j === 3 || j === 0)) b += 1;
        return b;
      default:
        return 0;
    }
  }

  static bCheck() {
    return true;
  }

  static c(paramInt) {
    let j;
    let bool;
    let b = 1;
    if (this.B === 5) return (paramInt === 19) ? 1 : 0;
    switch (paramInt) {
      case 25:
        bool = false;
        j = this.aTile(this.d, this.e, 0, 7);
        if (j === 4 || j === 1 || j === 5 || j === 2) bool = true;
        if (this.aCheck()) {
          b = 2;
          if (bool) b += 1;
        } else {
          b = 4;
          if (bool) b += 2;
        }
        return b;
      case 22:
        if (this.aCheck()) b += 1;
        j = this.aTile(this.d, this.e, 0, 7);
        if (this.m === -1 && (j === 3 || j === 0)) b += 1;
        return b;
      case 2:
        b += 1;
        if (this.aCheck()) b += 1;
        j = this.aTile(this.d, this.e, 0, 7);
        if (j === 3 || j === 0) b += 2;
        return b;
      case 8:
        if (!j) b += 1;
        return b;
      case 1:
        b += 1;
        j = this.aTile(this.d, this.e, 0, 7);
        if (j === 4 || j === 1 || j === 5 || j === 2) b += 1;
        if (!this.aCheck()) b += 1;
        return b;
      default:
        return 0;
    }
  }

  static bAction() {
    let b = this.A[this.o * 2 + 1];
    let j = this.o * 2;
    let k = this.aTile(this.d, this.e, 13, 57344);
    if (this.o === this.p && (this.l === null || this.c !== null || this.e !== 0 || k === 2 || k === 4) && this.m === -1 && this.aTile(this.d, this.e, 0, 7) !== 7) {
      return this.C !== 0 ? false : (((k === null || this.c !== null || this.e !== 0 || k === 2 || k === 4) && !this.aTileCheck(this.d, this.e, 5)));
    }
    if (this.e === 0 || this.A[j] === 4 || this.A[j] === 3 || this.A[j] === 6 || this.A[j] === 9 || this.A[j] === 5) {
      switch (this.A[j]) {
        case 25:
          return ((this.B === 5 || this.B === 4) && this.l !== null && this.C !== 0) ? false : ((this.l === null && this.bTile(this.d, this.e, 7, 0) && b !== null) ? true : (this.l !== null));
        case 2:
        case 22:
          return (this.l !== null && b > 0 && this.B !== 5);
        case 17:
          return true;
        case 19:
          return (this.B === 5 && this.l !== null && b > 0);
        case 1:
        case 8:
          return (this.l !== null && this.B !== 5) ? true : ((this.l === null && this.bTile(this.d, this.e, 5, 0)));
        case 20:
          return (j && b > 0 && this.B === 0) ? true : ((this.l === null && b > 0 && this.aTileCheck(this.d, this.e, 0) && this.c !== null));
        case 14:
          return (j && b > 0 && (this.B === 1 || this.B === 2 || this.B === 3)) ? true : ((this.l === null && b > 0 && this.C < 100 && (this.bTile(this.d, this.e, 1, 1) || (this.bTile(this.d, this.e, 3, 1) && this.c !== null))));
        case 24:
          return (j && b > 0 && (this.B === 4 || this.B === 5)) ? true : ((b > 0 && this.d !== 0 && k === 4));
        case 12:
          if ((k === 2 || k === 4) && b > 0 && this.d === 0) return true;
          if (this.l === null && b > 0) {
            if (this.bTile(this.d, this.e, 1, 0)) return true;
            if (this.c !== null && this.bTile(this.d, this.e, 3, 0)) return true;
          }
          return false;
        case 3:
        case 5:
        case 6:
        case 9:
          return (b > 0 && this.C < 100);
        case 23:
          return (!j && (k === 0 || k === 1));
        case 16:
          return ((k === 2 || k === 4) && this.d === 0);
        case 10:
          return (this.aTileCheck(this.d, this.e, 6) && this.l === null);
        case 7:
          return (this.d !== 0 && k === 4 && this.x === 3);
        case 13:
          return (this.l === null && this.aTileCheck(this.d, this.e, 2));
        case 4:
          return (this.aTileCheck(this.d, this.e, 2) && (!j || this.e !== 0));
        case 11:
          return ((this.l === null || this.c !== null) && b > 0 && (this.bTile(this.d, this.e, 1, 1) || this.bTile(this.d, this.e, 3, 1)) && this.l < this.h.g.length);
        case 15:
          return (this.l === null && this.R !== -1 && this.t[this.R] !== -1);
        default:
          return false;
      }
    }
    return false;
  }

  static k() {
    let j = 0;
    if (this.i < 6) {
      j = 6 - this.i;
    } else {
      j = 30 - this.i;
    }
    if (j > 8) j = 8;
    this.jValue(j);
    let k = this.aTile(this.d, this.e, 13, 57344);
    let m = j;
    this.o = 0;
    if (this.e !== 0) {
      m += j;
    } else {
      if (k === 1 || k === 0 || k === 4 || k === 2) {
        m += j;
        this.d = 0;
      }
      if (this.bTile(this.d, this.e, 1, 1) || (this.bTile(this.d, this.e, 3, 1) && this.c !== null)) m += j;
    }
    this.gainEnergy(m);
    let b;
    for (b = 0; b < this.h.length; b++) {
      if (this.o[b] === this.aTile(this.d, this.e, 9, 7680) && this.h[b] === 5) this.mAction(b);
    }
    this.uAction(j);
    this.fUpdate(j);
    this.sAction();
    for (b = 0; b < this.h.length; b++) {
      if (this.h[b] !== 4 && this.h[b] !== 5) {
        this.a[b] = true;
        this.rAction(b);
      }
    }
    k = false;
    this.g = false;
    this.bPaint(null);
    if (this.C === 0) {
      let arrayOfString = [String(j)];
      this.a(71, arrayOfString, -1);
    }
  }

  static fUpdate(paramInt) {
    for (let b = 0; b < this.r.length; b++) {
      if ((this.r[b] === 1 || this.r[b] === 3) && this.u[b] === 1 && (this.s[b] !== this.y || this.t[b] !== this.z)) {
        this.v[b] = (this.v[b] - paramInt);
        if (this.v[b] <= 0) this.u[b] = 0;
      }
    }
  }

  static aByte(paramByte1, paramByte2) {
    if (this.C !== 0 && !this.aCheck()) return;
    let j = this.aTile(paramByte1, paramByte2, 0, 7);
    let k = 0;
    if (j === 1 || j === 2 || j === 4 || j === 5) k += 1;
    if (j === 3 || j === 4 || j === 5) {
      k += 1;
    } else if (j === 7) {
      k += 6;
    }
    if (!this.aCheck()) k *= 2;
    this.aAction(k, k, true);
  }

  static gainEnergy(paramInt) {
    this.C += paramInt;
    if (this.C > 100) this.C = 100;
  }

  static aTileCheck(paramByte1, paramByte2, paramInt1, paramInt2) {
    return false;
  }

  static bTileCheck(paramByte1, paramByte2, paramInt1, paramInt2) {
    return false;
  }

  static aTileMatch(paramByte1, paramByte2, paramInt) {
    return false;
  }

  static bTileMatch(paramByte1, paramByte2, paramInt) {
    for (let b = 0; b < this.w.length; b++) {
      if (this.x[b] === paramByte1 && this.y[b] === paramByte2 && this.w[b] === paramInt && this.z[b] !== 2) return true;
    }
    return false;
  }

  static l() {
    let j = this.a(this.d, this.e, 0, 7);
    if (this.l === null && (j === 1 || j === 2 || j === 4 || j === 5) && this.a(0, 100, this.a) <= 10 && this.C === 0) {
      let arrayOfString = this.a(12, 1);
      this.a(79, arrayOfString, this.a(12));
    }
  }

  static h(paramInt) {
    this.o = (this.o + paramInt);
    if (this.o > this.p) {
      this.o = 0;
      return;
    }
    if (this.o < 0) this.o = this.p;
  }

  static m() {
    this.j = true;
    this.o = 0;
    if ((this.o < (this.v / 2) || this.o === this.p) && this.B !== 5) {
      if (this.C === 0) {
        this.o = (this.v / 2);
        return;
      }
      this.i(25);
      return;
    }
    if (this.B === 5) this.i(19);
  }

  static i(paramInt) {
    for (let b = 0; b < this.A.length; b += 2) {
      if (this.A[b] === paramInt) {
        this.o = (b / 2);
        return;
      }
    }
  }

  static n() {
    this.l = false;
    this.B = -1;
    this.m = false;
    this.r = false;
    this.n = false;
    let bool1 = false;
    let bool2 = false;
    let j;
    if ((j = this.a(this.d, this.e, 13, 57344)) === 0 || j === 1) {
      bool1 = true;
    } else if (j === 2 || j === 4) {
      bool2 = true;
    }
    if (this.c === null) {
      for (let b = 0; b < this.h.length; b++) {
        if (this.i[b] === this.d && this.j[b] === this.e && this.a[b] !== null) {
          if (this.h[b] === 4 && !this.a()) break;
          this.B = this.h[b];
          j = b;
          this.k = this.m[b];
          this.l = this.n[b];
          let b1;
          for (b1 = 0; b1 < this.p.length; b1++) this.p[b1] = 0;
          for (b1 = 0; b1 < this.q.length; b1++) this.q[b1] = 0;
          this.l = true;
          if ((this.B === 6 || this.B === 7) && this.e === 0 && this.A[this.o * 2] !== 1) {
            this.i(8);
            return;
          }
          if (this.B === 4) {
            if (this.U === 0) this.U = 1;
            if (!this.ae && this.h.e !== 0) {
              this.a(193, null, -1);
              this.ae = true;
              return;
            }
          } else if ((this.B === 1 || this.B === 2 || this.B === 3) && !this.ag && this.h.e !== 0) {
            this.a(195, null, -1);
            this.ag = true;
          }
          return;
        }
      }
    }
    if ((!bool1 && !bool2) || this.c !== null || this.d !== 0) {
      let b;
      for (b = 0; b < this.r.length; b++) {
        if (this.s[b] === this.d && this.t[b] === this.e && this.u[b] !== 2) {
          this.B[this.n] = b;
          this.n = (this.n + 1);
          this.m = true;
          if (this.r[b] === 4 && this.C === 0) {
            if (this.I !== 0 && this.H !== 0) {
              this.a(166, null, 32);
              this.y = true;
            } else if (this.I === 0) {
              this.a(120, null, 32);
              this.t(217);
            } else if (this.H === 0) {
              this.a(121, null, 32);
              this.t(217);
            }
          } else if (this.r[b] === 7) {
            if (this.C !== 0 && this.u[b] !== 2) {
              this.a(173, null, 33);
            } else if (this.C === 0 && this.I === 0 && this.m === -1) {
              let arrayOfString = [String(30 - this.A)];
              if (this.h.a === null) {
                this.a(73, null, 33);
              } else {
                this.a(229, arrayOfString, 33);
              }
            } else if (this.C === 0 && this.I !== 0) {
              this.a(74, null, 33);
            }
          } else if (this.r[b] === 6) {
            if (!this.Q) {
              this.a(126, null, 32);
              this.Q = true;
              if (this.C === 0) this.t(214);
            }
            if (!this.aj && this.h.e !== 0) {
              this.a(198, null, -1);
              this.aj = true;
            }
            this.w(6);
          } else if (this.r[b] === 2) {
            if (this.u[b] === 0) {
              this.P = true;
              this.a(114, null, 32);
              for (let b1 = 0; b1 < this.C.length; b1++) {
                if (this.C[b1] === this.d + this.e * b) {
                  this.C[b1] = -1;
                  break;
                }
              }
            } else if (this.l === null && this.C === 0) {
              this.i(4);
            }
          } else if (this.r[b] === 5 && this.u[b] === 0) {
            this.w(5);
          } else if (this.r[b] === 3) {
            if (this.W === 0) {
              this.a(112, null, 32);
              this.W = 1;
            }
            if (!this.al && this.h.e !== 0) {
              this.a(200, null, -1);
              this.a(192, null, -1);
              this.al = true;
              this.ad = true;
            }
          } else if (this.r[b] === 1) {
            if (this.u[b] === 0 && this.m === -1) {
              if (this.Y === 0) {
                this.a(82, null, 32);
                this.Y = 1;
              }
              if (!this.al && this.h.e !== 0) {
                this.a(200, null, -1);
                this.a(192, null, -1);
                this.ad = true;
                this.al = true;
              }
            }
            this.d(b, 0);
            this.w(1);
          } else if (this.r[b] === 0) {
            if (this.X === 0) {
              this.a(123, null, 32);
              this.X = 1;
            }
            if (!this.ak && this.h.e !== 0) {
              this.a(199, null, -1);
              this.ak = true;
            }
          }
        }
      }
      if (j === 0 || j === 1) {
        if (this.d === 22 && this.e === 23) {
          this.a(204, null, 53);
        } else if (this.d === 22 && this.e === 28) {
          this.a(205, null, 53);
        } else if (this.d === 4 && this.e === 33) {
          this.a(206, null, 53);
        } else if (this.d === 4 && this.e === 19) {
          this.a(207, null, 53);
        } else if (this.d === 12 && this.e === 26) {
          this.a(208, null, 53);
        } else if (this.d === 18 && this.e === 34) {
          this.a(209, null, 53);
        }
      }
      for (b = 0; b < this.w.length; b++) {
        if (this.x[b] === this.d && this.y[b] === this.e && this.z[b] !== 2 && this.C === 0 && this.e === 0) {
          this.q = b;
          this.r = true;
          if (this.w[b] === 20 && (this.g[this.d + this.e * b] & 0x2) === 0) {
            this.g[this.d + this.e * b] = (this.g[this.d + this.e * b] + 2);
            return;
          }
          break;
        }
      }
    }
  }
  
  static aAction(paramInt1, paramInt2, paramInt3) {
    if (((this.B === 5 || this.B === 4) && this.l !== null && this.C !== 0) || this.B === -1) return;
    if (this.B === 5 && this.l !== null) {
      if (this.A[paramInt2] !== 19) {
        this.a(202, null, 32);
        return;
      }
    } else if (this.l !== null && this.A[paramInt2] === 19) {
      return;
    }
    if (!this.j || paramInt3 !== 999) {
      if (this.l !== null && paramInt3 === 999) {
        this.m();
      } else if (this.j && paramInt3 > 0) {
        this.a(paramInt2, 1);
      } else if (this.l !== null && paramInt3 > 0) {
        this.a(paramInt2, 1);
        this.m();
      } else {
        return;
      }
    }
    this.D = 1200;
    let b;
    for (b = 0; b < this.c.length; b++) {
      this.c[b] = false;
    }
    for (b = 0; b < paramInt1; b++) {
      if (this.c()) return;
      let j;
      if ((j = this.a(0, this.k + this.l - 1, this.a)) >= this.k) {
        if (this.q[j - this.k] < this.h[8]) {
          this.q[j - this.k] = (this.q[j - this.k] + 1);
          this.c[j] = true;
          this.a(j, 0, this.q[j - this.k]);
        } else {
          b--;
        }
      } else if (this.p[j] < this.h[this.B]) {
        this.p[j] = (this.p[j] + 1);
        this.c[j] = true;
        this.a(j, 0, this.p[j]);
      } else {
        b--;
      }
    }
    if (this.c()) return;
    this.v(61);
    this.p = true;
  }
  
  static o() {
    this.m = false;
    let b;
    for (b = 0; b < this.k; b++) {
      if (this.p[b] < this.h[this.B]) this.a(this.i[this.B], this.j[this.B], false);
    }
    for (b = 0; b < this.l; b++) {
      if (this.q[b] < this.h[8]) this.a(this.i[8], this.j[8], false);
    }
    this.p = false;
  }
  
  static c() {
    let b1 = 0;
    let b2;
    for (b2 = 0; b2 < this.k; b2++) {
      if (this.p[b2] >= this.h[this.B]) b1 += 1;
    }
    for (b2 = 0; b2 < this.l; b2++) {
      if (this.q[b2] >= this.h[8]) b1 += 1;
    }
    if (b1 >= this.k + this.l) {
      this.o = 1;
      return true;
    }
    return false;
  }
  
  static p() {
    if (this.a()) {
      this.v(59);
      return;
    }
    this.v(60);
  }
  
  static q() {
    if (this.m !== 6) this.p();
    if (this.j !== -1) {
      let arrayOfString;
      if ((arrayOfString = this.a(this.B, this.k, this.l)) !== null) {
        this.a(79, arrayOfString, this.f[0]);
      }
      if (this.C !== 0) {
        if (this.a() && (this.B === 1 || this.B === 7 || this.B === 3 || this.B === 6)) {
          this.g(30);
          this.a(228, null, -1);
        } else if (!this.a() && this.B === 0) {
          this.g(100);
          this.a(228, null, -1);
        }
      }
    } else if (this.m !== 2 && this.m === 6) {
      this.a(11, 1);
      this.r = 2;
      this.G = false;
      this.t(213);
      this.v = false;
      this.m = true;
    }
    this.D = -1;
    this.o = 0;
    this.j = false;
    this.l = false;
    if (this.j !== -1) this.a[this.j] = false;
    if (this.B === 5 && this.j !== -1) {
      for (let b = 0; b < this.h.length; b++) {
        if (this.h[b] === 4 && this.o[b] === this.o[this.j]) {
          this.m[b] = (this.m[b] - 1);
          if (this.m[b]) this.a[b] = false;
          break;
        }
      }
    } else if (this.B === 4) {
      for (let b = 0; b < this.h.length; b++) {
        if (this.h[b] === 5 && this.o[b] === this.o[this.j]) this.a[b] = false;
      }
    }
    if (this.E === 0) {
      let bool = true;
      for (let b = 0; b < this.h.length; b++) {
        if (this.h[b] === 4 && this.a[b] === true) bool = false;
      }
      if (bool) {
        this.E = 1;
        this.r = 3;
      }
    }
    this.B = -1;
    this.n();
  }
  
  static a(paramInt, paramByte1, paramByte2) {
    // Bytecode decompiled - method stub
    return null;
  }
  
  static a(paramInt1, paramInt2) {
    let arrayOfString = new Array(1);
    let b1 = 0;
    this.v = false;
    let b = this.A[this.o * 2];
    if (this.C !== 0 && paramInt1 !== 21) return null;
    if (paramInt2 > 1) {
      arrayOfString[0] = paramInt2 + "x " + this.c.a(this.h.c[paramInt1]);
    } else {
      arrayOfString[0] = this.c.a(this.h.c[paramInt1]);
    }
    let b2 = 0;
    if (paramInt1 === 6 || paramInt1 === 9 || paramInt1 === 3 || paramInt1 === 5) {
      b2 = 1;
    } else if (paramInt1 === 8 || paramInt1 === 1 || paramInt1 === 22 || paramInt1 === 2 || paramInt1 === 25 || paramInt1 === 19) {
      b2 = 2;
    }
    let b3;
    for (b3 = 0; b3 < this.A.length; b3 += 2) {
      if (!b1 && (this.A[b3] === 6 || this.A[b3] === 9 || this.A[b3] === 3 || this.A[b3] === 5 || this.A[b3] === 8 || this.A[b3] === 1 || this.A[b3] === 22 || this.A[b3] === 2 || this.A[b3] === 25 || this.A[b3] === 19)) {
        b1 = b3;
        this.v = b3;
      }
      if (this.v === b1 && (this.A[b3] === 8 || this.A[b3] === 1 || this.A[b3] === 22 || this.A[b3] === 2 || this.A[b3] === 25 || this.A[b3] === 19)) {
        this.v = b3;
        break;
      }
    }
    for (b3 = 0; b3 < this.A.length; b3 += 2) {
      if (paramInt1 === this.A[b3]) {
        this.A[b3 + 1] = (this.A[b3 + 1] + paramInt2);
        break;
      }
      if (paramInt1 === 0 && this.A[b3] === 22) {
        if (this.A[b3 + 1] + paramInt2 <= 99) this.A[b3 + 1] = (this.A[b3 + 1] + paramInt2);
        break;
      }
      if (paramInt1 === 18 && this.A[b3] === 2 && this.q !== null) {
        if (this.A[b3 + 1] + paramInt2 <= 99) this.A[b3 + 1] = (this.A[b3 + 1] + paramInt2);
        break;
      }
      if (this.A[b3] === 69) {
        if (b2 === 0) {
          for (let j = this.A.length - 1; j > b1 + 2; j -= 2) {
            this.A[j] = this.A[j - 2];
            this.A[j - 1] = this.A[j - 3];
          }
          this.A[b1] = paramInt1;
          this.A[b1 + 1] = paramInt2;
          this.p = (this.p + 1);
          this.v = (this.v + 2);
        } else if (b2 === 1) {
          for (let j = this.A.length - 1; j > this.v + 2; j -= 2) {
            this.A[j] = this.A[j - 2];
            this.A[j - 1] = this.A[j - 3];
          }
          this.A[this.v] = paramInt1;
          this.A[this.v + 1] = paramInt2;
          this.p = (this.p + 1);
          this.v = (this.v + 2);
        } else {
          this.A[b3] = paramInt1;
          this.A[b3 + 1] = paramInt2;
          this.p = (this.p + 1);
          if (paramInt1 === 2) {
            this.q = true;
            this.A[b3 + 1] = 3;
            for (let b4 = 0; b4 < this.A.length; b4 += 2) {
              if (this.A[b4] === 18) {
                this.A[b3 + 1] = (this.A[b3 + 1] + this.A[b4 + 1]);
                this.a(b4, this.A[b4 + 1]);
                break;
              }
            }
          }
        }
        this.i(b);
        break;
      }
    }
    return arrayOfString;
  }
  
  static a(paramInt1, paramInt2) {
    this.A[paramInt1 + 1] = (this.A[paramInt1 + 1] - paramInt2);
    if (this.A[paramInt1 + 1] <= 0 && this.A[paramInt1] !== 22 && this.A[paramInt1] !== 2) {
      for (let j = paramInt1 + 2; j < this.A.length; j++) this.A[j - 2] = this.A[j];
      this.p = (this.p - 1);
      this.o = 0;
    }
  }
  
  static a(paramInt1, paramInt2, paramBoolean) {
    let j = this.a(paramInt1, paramInt2, this.a);
    if (this.h.a === 2) j += j >> 1;
    if (j >= this.C && paramBoolean) j = this.C - 1;
    if (j > this.C) j = this.C;
    this.m = (this.m + j);
    this.C -= j;
    if (this.C <= 0) {
      this.C = 0;
      this.a = -1;
      if (paramInt1 < 100) return;
      this.a(187, null, -1);
    }
  }
  
  static j(paramInt) {
    this.z += paramInt;
    this.A = (this.z - 12) / 24;
    let bool = false;
    if (this.A >= 30 && this.h.a !== null && this.I === 0 && this.C === 0) {
      this.c = false;
      this.e = 0;
      this.G = false;
      bool = true;
      this.C = 1;
      this.o = 0;
      let b;
      for (b = 0; b < this.A.length; b++) this.A[b] = 69;
      this.A[0] = 25;
      this.p = true;
      for (b = 0; b < this.h.length; b++) {
        if (this.h[b] === 2) this.a[b] = false;
      }
      this.l = 10;
      let arrayOfString = ["" + this.l];
      b = false;
      this.i = false;
      this.t(221);
      this.a(174, arrayOfString, -1);
      this.r = 5;
    }
    if (!bool) {
      this.i = (this.i + paramInt);
      if (this.i > 23) this.i = (this.i - 24);
    }
    if ((this.i === 6 || this.i === 18) && this.C !== 0) this.a(179, null, -1);
    this.p();
  }
  
  static r() {
    if (this.s === null) {
      this.k = false;
      let b;
      for (b = 0; b < this.h.length; b++) {
        if (this.o[b] === this.a(this.d, this.e, 9, 7680)) {
          this.n(b);
        }
      }
      for (b = 0; b < this.h.length; b++) {
        if (this.o[b] === this.a(this.d, this.e, 9, 7680)) {
          if (this.h[b] === 0) {
            this.k(b);
          } else {
            this.o(b);
            this.l(b);
            this.m(b);
            this.p(b);
            this.q(b);
          }
        }
      }
    }
    this.s = false;
  }
  
  static k(paramInt) {
    if (this.a[paramInt] !== null) {
      if (this.d === this.i[paramInt] && this.e === this.j[paramInt]) return;
      if (this.a()) {
        if (this.k !== null) {
          this.b(paramInt, this.f, this.g);
          return;
        }
        this.s(paramInt);
        return;
      }
      if (this.a(paramInt, 1)) {
        this.b(paramInt, this.f[0], this.f[1]);
        this.a(this.i[paramInt], this.j[paramInt], 1, 1);
        return;
      }
    } else if (this.i === 6) {
      this.a[paramInt] = true;
      this.r(paramInt);
    }
  }
  
  static l(paramInt) {
    if (this.a[paramInt] !== null) {
      if (this.d === this.i[paramInt] && this.e === this.j[paramInt]) return;
      if (this.a()) {
        if (this.a(paramInt, 5)) {
          this.k[paramInt] = this.f[0];
          this.l[paramInt] = this.f[1];
          this.i[paramInt] = this.f[0];
          this.j[paramInt] = this.f[1];
          return;
        }
        if (this.k !== null) {
          this.b(paramInt, this.f, this.g);
          return;
        }
        this.s(paramInt);
      }
    }
  }
  
  static m(paramInt) {
    if (this.a[paramInt] !== null) {
      if (!this.a()) {
        if (this.d === this.i[paramInt] && this.e === this.j[paramInt]) return;
        if (this.k !== null) {
          this.b(paramInt, this.f, this.g);
        } else {
          this.s(paramInt);
        }
        if (this.d === this.i[paramInt] && this.e === this.j[paramInt]) return;
        if (this.a(0, 100, this.a) <= 50) {
          if (this.k !== null) {
            this.b(paramInt, this.f, this.g);
            return;
          }
          this.s(paramInt);
          return;
        }
      } else {
        for (let b = 0; b < this.h.length; b++) {
          if (this.h[b] === 4 && this.o[b] === this.o[paramInt]) {
            this.k[paramInt] = this.i[b];
            this.l[paramInt] = this.j[b];
            this.i[paramInt] = this.i[b];
            this.j[paramInt] = this.j[b];
            return;
          }
        }
      }
    }
  }
  
  static s() {
    if (this.i === 6) {
      for (let b = 0; b < this.u; b++) {
        for (let b1 = 0; b1 < this.r.length; b1++) {
          if (this.r[b1] === 5 && this.u[b1] === 2) {
            this.u[b1] = 0;
            this.g[this.s[b1] + this.t[b1] * b] = (this.g[this.s[b1] + this.t[b1] * b] - 2);
            break;
          }
        }
      }
      this.u = 0;
    }
  }
  
  static n(paramInt) {
    if (this.a[paramInt] !== null) {
      if (this.d === this.i[paramInt] && this.e === this.j[paramInt]) return;
      if (this.a(this.i[paramInt], this.j[paramInt], this.f, this.g)) {
        this.b(paramInt, this.f, this.g);
      } else if (this.a() || this.h[paramInt] === 2) {
        this.s(paramInt);
      }
      if (this.a(this.i[paramInt], this.j[paramInt], this.d, this.e)) {
        this.k = true;
        return;
      }
    } else if (this.i === 6 && (this.C === 0 || this.h[paramInt] === true)) {
      this.a[paramInt] = true;
      this.r(paramInt);
    }
  }
  
  static o(paramInt) {
    if (this.a[paramInt] !== null) {
      if (this.d === this.i[paramInt] && this.e === this.j[paramInt]) return;
      if (!this.a() || this.a(0, 100, this.a) <= 50) {
        this.s(paramInt);
        return;
      }
    } else if (this.i === 6) {
      this.a[paramInt] = true;
      this.r(paramInt);
    }
  }
  
  static p(paramInt) {
    if (this.a[paramInt] !== null) {
      if (!this.a()) {
        this.a[paramInt] = false;
        return;
      }
      if (this.d === this.i[paramInt] && this.e === this.j[paramInt]) return;
      if (this.a(0, 100, this.a) <= 30) {
        this.s(paramInt);
        return;
      }
    } else if (this.i === 6) {
      this.a[paramInt] = true;
      this.r(paramInt);
    }
  }
  
  static q(paramInt) {
    if (this.a[paramInt] !== null) {
      if (this.d === this.i[paramInt] && this.e === this.j[paramInt]) return;
      let j;
      if ((j = this.a(this.i[paramInt], this.j[paramInt], 0, 7)) === 3 || j === 4 || j === 5) {
        this.s(paramInt);
      } else if (this.a(0, 100, this.a) <= 50) {
        this.s(paramInt);
      }
      return;
    }
    if (this.i === 6) {
      this.a[paramInt] = true;
      this.r(paramInt);
    }
  }
  
  static a(paramInt1, paramInt2, paramInt3, paramInt4) {
    return (paramInt1 >= paramInt3 - 1 && paramInt1 <= paramInt3 + 1 && paramInt2 >= paramInt4 - 1 && paramInt2 <= paramInt4 + 1);
  }
  
  static r(paramInt) {
    while (true) {
      let b1 = this.a(0, this.b, this.a);
      let b2 = this.a(0, this.c, this.a);
      if (!this.c(b1, b2, paramInt) || this.a(this.d, this.e, b1, b2)) continue;
      this.i[paramInt] = b1;
      this.j[paramInt] = b2;
      this.k[paramInt] = b1;
      this.l[paramInt] = b2;
      return;
    }
  }
  
  static a(paramByte1, paramByte2, paramInt1, paramInt2) {
    return (paramByte1 >= 0 && paramByte1 < this.b && paramByte2 >= 0 && paramByte2 < this.c) ? ((this.s[paramByte1 + paramByte2 * this.b] & paramInt2) >> paramInt1) : ((paramByte2 >= this.c) ? -1 : 6);
  }
  
  static a() {
    return (this.i >= 6 && this.i <= 17);
  }
  
  static a(paramInt1, paramInt2) {
    // Bytecode decompiled - method stub
    return false;
  }
  
  static s(paramInt) {
    let b = 0;
    do {
      let j = this.a(-1, 1, this.a);
      let k = this.a(-1, 1, this.a);
      if (this.a(paramInt, j, k, true)) return;
    } while (++b < 30);
  }
  
  static b(paramInt1, paramInt2, paramInt3) {
    let bool1;
    let bool2;
    if (this.i[paramInt1] === paramInt2 && this.j[paramInt1] === paramInt3) return;
    if (paramInt2 > this.i[paramInt1]) {
      bool1 = true;
    } else if (paramInt2 < this.i[paramInt1]) {
      bool1 = true;
    } else {
      bool1 = false;
    }
    if (paramInt3 > this.j[paramInt1]) {
      bool2 = true;
    } else if (paramInt3 < this.j[paramInt1]) {
      bool2 = true;
    } else {
      bool2 = false;
    }
    for (let b = 0; b < 3; b++) {
      if (b === 0) {
        if (this.a(paramInt1, bool1, bool2, false)) return;
      } else {
        this.c(b, bool1, bool2);
        if (this.a(paramInt1, this.f[0], this.f[1], false)) return;
      }
    }
    this.s(paramInt1);
  }
  
  static c(paramInt1, paramInt2, paramInt3) {
    // Bytecode decompiled - method stub
  }
  
  static a(paramInt1, paramInt2, paramInt3, paramBoolean) {
    if ((paramInt2 !== 0 || paramInt3 !== 0) && (this.k[paramInt1] !== this.i[paramInt1] + paramInt2 || this.l[paramInt1] !== this.j[paramInt1] + paramInt3 || !paramBoolean) && this.c(this.i[paramInt1] + paramInt2, this.j[paramInt1] + paramInt3, paramInt1)) {
      this.k[paramInt1] = this.i[paramInt1];
      this.l[paramInt1] = this.j[paramInt1];
      this.i[paramInt1] = (this.i[paramInt1] + paramInt2);
      this.j[paramInt1] = (this.j[paramInt1] + paramInt3);
      return true;
    }
    return false;
  }
  
  static c(paramByte1, paramByte2, paramInt) {
    if (!this.b(paramByte1, paramByte2)) return false;
    if (this.a(paramByte1, paramByte2, 0, 7) === 7) return false;
    if (this.a(paramByte1, paramByte2, 0, 7) === 6) return false;
    if (this.o[paramInt] !== this.a(paramByte1, paramByte2, 9, 7680)) return false;
    for (let b = 0; b < this.h.length; b++) {
      if (this.i[b] === paramByte1 && this.j[b] === paramByte2) return false;
    }
    return true;
  }
  
  static b(paramInt1, paramInt2) {
    if (paramInt1 < 0 || paramInt1 >= this.b || paramInt2 < 0 || paramInt2 >= this.c) return false;
    let j = this.a(paramInt1, paramInt2, 0, 7);
    let k = this.a(paramInt1, paramInt2, 13, 57344);
    return (j === 6 && k !== 2 && k !== 4) ? false : (!(k === 4 && this.I !== 0));
  }
  
  static a(paramInt1, paramInt2, paramRandom) {
    if (paramInt2 - paramInt1 + 1 === 0) paramInt2++;
    return (paramRandom.nextInt() >>> 1) % (paramInt2 - paramInt1 + 1) + paramInt1;
  }
  
  static b(paramGraphics) {
    if (this.A !== 0 && this.A !== 3) this.A = 4;
    this.b.setSeed((this.d + this.e * this.b + this.h));
    this.c.setSeed((this.d + this.e * this.b));
    paramGraphics.setClip(0, 0, 176, 208);
    this.a(paramGraphics, true);
    this.e(this.a);
  }
  
  static a(paramGraphics, paramBoolean) {
    // Bytecode decompiled - method stub
  }

  // Removed long bytecode comment - original method stub generated below
  /*
  static a_original(paramGraphics, paramBoolean) {
    // Byte code:
    //   0: iconst_0
    //   1: istore_2
    //   2: iload_2
    //   3: getstatic i.u : [S
    //   6: arraylength
    //   7: if_icmpge -> 42
    //   10: getstatic i.u : [S
    //   13: iload_2
    //   14: iconst_m1
    //   15: sastore
    //   16: getstatic i.v : [S
    //   19: iload_2
    //   20: iconst_m1
    //   21: sastore
    //   22: getstatic i.e : [Z
    //   25: iload_2
    //   26: iconst_0
    //   27: bastore
    //   28: iconst_0
    //   29: putstatic i.a : S
    //   32: iconst_0
    //   33: putstatic i.M : I
    //   36: iinc #2, 1
    //   39: goto -> 2
    //   42: getstatic i.d : B
    //   45: getstatic i.e : B
    //   48: bipush #13
    //   50: ldc_w 57344
    //   53: invokestatic a : (BBII)I
    //   56: istore_2
    //   57: iconst_0
    //   58: istore_3
    //   59: iconst_0
    //   60: istore #4
    //   62: iconst_0
    //   63: istore #5
    //   65: iconst_0
    //   66: istore #6
    //   68: aload_0
    //   69: invokestatic d : (Ljavax/microedition/lcdui/Graphics;)V
    //   72: aload_0
    //   73: invokestatic c : (Ljavax/microedition/lcdui/Graphics;)V
    //   76: iconst_1
    //   77: aload_0
    //   78: invokestatic a : (ILjavax/microedition/lcdui/Graphics;)V
    //   81: getstatic h.a : I
    //   84: ifeq -> 92
    //   87: iconst_0
    //   88: aload_0
    //   89: invokestatic a : (ILjavax/microedition/lcdui/Graphics;)V
    //   92: iconst_2
    //   93: aload_0
    //   94: invokestatic a : (ILjavax/microedition/lcdui/Graphics;)V
    //   97: getstatic i.m : I
    //   100: iconst_m1
    //   101: if_icmpeq -> 132
    //   104: getstatic i.d : B
    //   107: bipush #27
    //   109: if_icmpne -> 132
    //   112: getstatic i.e : B
    //   115: bipush #36
    //   117: if_icmpne -> 132
    //   120: bipush #88
    //   122: sipush #153
    //   125: sipush #384
    //   128: aload_0
    //   129: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   132: iload_1
    //   133: ifne -> 137
    //   136: return
    //   137: getstatic i.c : Z
    //   140: ifeq -> 584
    //   143: bipush #-128
    //   145: getstatic i.h : B
    //   148: bipush #32
    //   150: imul
    //   151: iadd
    //   152: dup
    //   153: istore #7
    //   155: bipush #64
    //   157: iadd
    //   158: istore #8
    //   160: iconst_0
    //   161: istore #9
    //   163: iconst_0
    //   164: istore #10
    //   166: iconst_0
    //   167: istore #11
    //   169: iconst_0
    //   170: istore #14
    //   172: iconst_0
    //   173: istore #15
    //   175: aload_0
    //   176: iconst_0
    //   177: invokevirtual setColor : (I)V
    //   180: iconst_0
    //   181: istore #16
    //   183: iload #16
    //   185: getstatic i.d : [B
    //   188: arraylength
    //   189: if_icmpge -> 320
    //   192: getstatic i.d : [B
    //   195: iload #16
    //   197: baload
    //   198: iload #7
    //   200: bipush #10
    //   202: isub
    //   203: if_icmplt -> 314
    //   206: getstatic i.d : [B
    //   209: iload #16
    //   211: baload
    //   212: iload #8
    //   214: bipush #10
    //   216: iadd
    //   217: if_icmpgt -> 314
    //   220: iconst_0
    //   221: istore #12
    //   223: iload #16
    //   225: getstatic i.d : [B
    //   228: arraylength
    //   229: iconst_1
    //   230: isub
    //   231: if_icmpne -> 238
    //   234: bipush #28
    //   236: istore #12
    //   238: sipush #1000
    //   241: getstatic i.d : [B
    //   244: iload #16
    //   246: baload
    //   247: iload #7
    //   249: isub
    //   250: imul
    //   251: bipush #64
    //   253: idiv
    //   254: sipush #176
    //   257: imul
    //   258: sipush #1000
    //   261: idiv
    //   262: bipush #28
    //   264: isub
    //   265: dup
    //   266: istore #13
    //   268: iconst_0
    //   269: bipush #57
    //   271: bipush #56
    //   273: aload_0
    //   274: invokestatic b : (IIIILjavax/microedition/lcdui/Graphics;)V
    //   277: iload #13
    //   279: bipush #112
    //   281: iload #12
    //   283: iadd
    //   284: bipush #57
    //   286: sipush #169
    //   289: bipush #112
    //   291: iload #12
    //   293: iadd
    //   294: isub
    //   295: aload_0
    //   296: invokestatic b : (IIIILjavax/microedition/lcdui/Graphics;)V
    //   299: getstatic i.m : [I
    //   302: iload #15
    //   304: iload #13
    //   306: iastore
    //   307: iload #15
    //   309: iconst_1
    //   310: iadd
    //   311: i2b
    //   312: istore #15
    //   314: iinc #16, 1
    //   317: goto -> 183
    //   320: iconst_0
    //   321: istore #16
    //   323: iload #16
    //   325: getstatic i.d : [B
    //   328: arraylength
    //   329: if_icmpge -> 455
    //   332: iload #8
    //   334: sipush #128
    //   337: if_icmple -> 449
    //   340: getstatic i.d : [B
    //   343: iload #16
    //   345: baload
    //   346: bipush #-86
    //   348: if_icmpgt -> 449
    //   351: iconst_0
    //   352: istore #12
    //   354: iload #16
    //   356: getstatic i.d : [B
    //   359: arraylength
    //   360: iconst_1
    //   361: isub
    //   362: if_icmpne -> 369
    //   365: bipush #28
    //   367: istore #12
    //   369: sipush #1000
    //   372: getstatic i.d : [B
    //   375: iload #16
    //   377: baload
    //   378: sipush #128
    //   381: iadd
    //   382: bipush #32
    //   384: iadd
    //   385: imul
    //   386: bipush #64
    //   388: idiv
    //   389: sipush #176
    //   392: imul
    //   393: sipush #1000
    //   396: idiv
    //   397: bipush #28
    //   399: isub
    //   400: dup
    //   401: istore #13
    //   403: iconst_0
    //   404: bipush #57
    //   406: bipush #56
    //   408: aload_0
    //   409: invokestatic b : (IIIILjavax/microedition/lcdui/Graphics;)V
    //   412: iload #13
    //   414: bipush #112
    //   416: iload #12
    //   418: iadd
    //   419: bipush #57
    //   421: sipush #169
    //   424: bipush #112
    //   426: iload #12
    //   428: iadd
    //   429: isub
    //   430: aload_0
    //   431: invokestatic b : (IIIILjavax/microedition/lcdui/Graphics;)V
    //   434: getstatic i.m : [I
    //   437: iload #15
    //   439: iload #13
    //   441: iastore
    //   442: iload #15
    //   444: iconst_1
    //   445: iadd
    //   446: i2b
    //   447: istore #15
    //   449: iinc #16, 1
    //   452: goto -> 323
    //   455: iconst_0
    //   456: istore #16
    //   458: iload #16
    //   460: iload #15
    //   462: if_icmpge -> 560
    //   465: getstatic i.m : [I
    //   468: iload #16
    //   470: iaload
    //   471: dup
    //   472: istore #13
    //   474: ifle -> 493
    //   477: iload #16
    //   479: ifne -> 493
    //   482: iconst_0
    //   483: iconst_0
    //   484: iload #13
    //   486: sipush #169
    //   489: aload_0
    //   490: invokestatic b : (IIIILjavax/microedition/lcdui/Graphics;)V
    //   493: iload #16
    //   495: iload #15
    //   497: iconst_1
    //   498: isub
    //   499: if_icmpne -> 527
    //   502: iload #13
    //   504: bipush #57
    //   506: iadd
    //   507: iconst_0
    //   508: sipush #176
    //   511: iload #13
    //   513: bipush #57
    //   515: iadd
    //   516: isub
    //   517: sipush #169
    //   520: aload_0
    //   521: invokestatic b : (IIIILjavax/microedition/lcdui/Graphics;)V
    //   524: goto -> 560
    //   527: iload #13
    //   529: bipush #57
    //   531: iadd
    //   532: iconst_0
    //   533: getstatic i.m : [I
    //   536: iload #16
    //   538: iconst_1
    //   539: iadd
    //   540: iaload
    //   541: iload #13
    //   543: bipush #57
    //   545: iadd
    //   546: isub
    //   547: sipush #169
    //   550: aload_0
    //   551: invokestatic b : (IIIILjavax/microedition/lcdui/Graphics;)V
    //   554: iinc #16, 1
    //   557: goto -> 458
    //   560: aload_0
    //   561: iconst_0
    //   562: iconst_0
    //   563: sipush #176
    //   566: bipush #42
    //   568: invokevirtual fillRect : (IIII)V
    //   571: aload_0
    //   572: iconst_0
    //   573: bipush #126
    //   575: sipush #176
    //   578: bipush #44
    //   580: invokevirtual fillRect : (IIII)V
    //   583: return
    //   584: getstatic i.e : Z
    //   587: ifeq -> 770
    //   590: aload_0
    //   591: iconst_0
    //   592: invokevirtual setColor : (I)V
    //   595: iconst_0
    //   596: istore #7
    //   598: aload_0
    //   599: iconst_0
    //   600: iconst_0
    //   601: sipush #176
    //   604: bipush #42
    //   606: invokevirtual fillRect : (IIII)V
    //   609: aload_0
    //   610: iconst_0
    //   611: invokevirtual setColor : (I)V
    //   614: aload_0
    //   615: iconst_0
    //   616: sipush #169
    //   619: sipush #382
    //   622: iconst_3
    //   623: invokestatic a : (II)I
    //   626: isub
    //   627: bipush #10
    //   629: iadd
    //   630: sipush #176
    //   633: sipush #382
    //   636: iconst_3
    //   637: invokestatic a : (II)I
    //   640: bipush #10
    //   642: isub
    //   643: invokevirtual fillRect : (IIII)V
    //   646: bipush #88
    //   648: sipush #169
    //   651: sipush #382
    //   654: aload_0
    //   655: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   658: bipush #88
    //   660: bipush #42
    //   662: sipush #383
    //   665: aload_0
    //   666: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   669: getstatic i.h : B
    //   672: istore #8
    //   674: getstatic i.h : B
    //   677: iconst_4
    //   678: iadd
    //   679: i2b
    //   680: putstatic i.h : B
    //   683: getstatic i.h : B
    //   686: bipush #7
    //   688: if_icmple -> 701
    //   691: getstatic i.h : B
    //   694: bipush #8
    //   696: isub
    //   697: i2b
    //   698: putstatic i.h : B
    //   701: aload_0
    //   702: bipush #88
    //   704: sipush #383
    //   707: iconst_2
    //   708: invokestatic a : (II)I
    //   711: iconst_1
    //   712: ishr
    //   713: isub
    //   714: iconst_3
    //   715: iadd
    //   716: bipush #51
    //   718: sipush #383
    //   721: iconst_2
    //   722: invokestatic a : (II)I
    //   725: bipush #6
    //   727: isub
    //   728: bipush #16
    //   730: invokevirtual setClip : (IIII)V
    //   733: aload_0
    //   734: iconst_0
    //   735: bipush #-17
    //   737: invokevirtual translate : (II)V
    //   740: aload_0
    //   741: iconst_0
    //   742: invokestatic a : (Ljavax/microedition/lcdui/Graphics;Z)V
    //   745: aload_0
    //   746: iconst_0
    //   747: bipush #17
    //   749: invokevirtual translate : (II)V
    //   752: iload #8
    //   754: putstatic i.h : B
    //   757: aload_0
    //   758: iconst_0
    //   759: iconst_0
    //   760: sipush #176
    //   763: sipush #208
    //   766: invokevirtual setClip : (IIII)V
    //   769: return
    //   770: iload_2
    //   771: iconst_2
    //   772: if_icmpeq -> 780
    //   775: iload_2
    //   776: iconst_4
    //   777: if_icmpne -> 1542
    //   780: getstatic i.d : B
    //   783: iconst_1
    //   784: isub
    //   785: i2b
    //   786: getstatic i.e : B
    //   789: iconst_0
    //   790: bipush #7
    //   792: invokestatic a : (BBII)I
    //   795: bipush #6
    //   797: if_icmpeq -> 824
    //   800: getstatic i.d : B
    //   803: iconst_1
    //   804: isub
    //   805: i2b
    //   806: getstatic i.e : B
    //   809: iconst_0
    //   810: bipush #7
    //   812: invokestatic a : (BBII)I
    //   815: iconst_m1
    //   816: if_icmpeq -> 824
    //   819: iconst_m1
    //   820: istore_3
    //   821: goto -> 916
    //   824: getstatic i.d : B
    //   827: iconst_1
    //   828: iadd
    //   829: i2b
    //   830: getstatic i.e : B
    //   833: iconst_0
    //   834: bipush #7
    //   836: invokestatic a : (BBII)I
    //   839: bipush #6
    //   841: if_icmpeq -> 868
    //   844: getstatic i.d : B
    //   847: iconst_1
    //   848: iadd
    //   849: i2b
    //   850: getstatic i.e : B
    //   853: iconst_0
    //   854: bipush #7
    //   856: invokestatic a : (BBII)I
    //   859: iconst_m1
    //   860: if_icmpeq -> 868
    //   863: iconst_1
    //   864: istore_3
    //   865: goto -> 916
    //   868: getstatic i.d : B
    //   871: getstatic i.e : B
    //   874: iconst_1
    //   875: isub
    //   876: i2b
    //   877: iconst_0
    //   878: bipush #7
    //   880: invokestatic a : (BBII)I
    //   883: bipush #6
    //   885: if_icmpeq -> 913
    //   888: getstatic i.d : B
    //   891: getstatic i.e : B
    //   894: iconst_1
    //   895: isub
    //   896: i2b
    //   897: iconst_0
    //   898: bipush #7
    //   900: invokestatic a : (BBII)I
    //   903: iconst_m1
    //   904: if_icmpeq -> 913
    //   907: iconst_m1
    //   908: istore #4
    //   910: goto -> 916
    //   913: iconst_1
    //   914: istore #4
    //   916: iload_2
    //   917: iconst_4
    //   918: if_icmpne -> 932
    //   921: iload_3
    //   922: ineg
    //   923: i2b
    //   924: istore #5
    //   926: iload #4
    //   928: ineg
    //   929: i2b
    //   930: istore #6
    //   932: iconst_0
    //   933: istore #7
    //   935: iconst_0
    //   936: istore #8
    //   938: iconst_0
    //   939: istore #9
    //   941: aload_0
    //   942: iconst_0
    //   943: invokevirtual setColor : (I)V
    //   946: iconst_0
    //   947: istore #11
    //   949: iload #11
    //   951: getstatic h.a : [[B
    //   954: iconst_0
    //   955: aaload
    //   956: arraylength
    //   957: if_icmpge -> 1220
    //   960: getstatic h.a : [[B
    //   963: getstatic i.h : B
    //   966: aaload
    //   967: iload #11
    //   969: baload
    //   970: iload_3
    //   971: if_icmpne -> 1214
    //   974: getstatic h.a : [[B
    //   977: getstatic i.h : B
    //   980: aaload
    //   981: iload #11
    //   983: iconst_1
    //   984: iadd
    //   985: baload
    //   986: iload #4
    //   988: if_icmpne -> 1214
    //   991: getstatic i.h : B
    //   994: getstatic i.a : [[I
    //   997: iload #4
    //   999: iconst_1
    //   1000: iadd
    //   1001: aaload
    //   1002: iload_3
    //   1003: iconst_1
    //   1004: iadd
    //   1005: iaload
    //   1006: if_icmpne -> 1016
    //   1009: bipush #36
    //   1011: istore #10
    //   1013: goto -> 1091
    //   1016: getstatic i.h : B
    //   1019: getstatic i.a : [[I
    //   1022: iload #4
    //   1024: iconst_1
    //   1025: iadd
    //   1026: aaload
    //   1027: iload_3
    //   1028: iconst_1
    //   1029: iadd
    //   1030: iaload
    //   1031: if_icmplt -> 1057
    //   1034: getstatic i.h : B
    //   1037: bipush #7
    //   1039: if_icmpne -> 1087
    //   1042: getstatic i.a : [[I
    //   1045: iload #4
    //   1047: iconst_1
    //   1048: iadd
    //   1049: aaload
    //   1050: iload_3
    //   1051: iconst_1
    //   1052: iadd
    //   1053: iaload
    //   1054: ifne -> 1087
    //   1057: getstatic i.h : B
    //   1060: ifne -> 1080
    //   1063: getstatic i.a : [[I
    //   1066: iload #4
    //   1068: iconst_1
    //   1069: iadd
    //   1070: aaload
    //   1071: iload_3
    //   1072: iconst_1
    //   1073: iadd
    //   1074: iaload
    //   1075: bipush #7
    //   1077: if_icmpeq -> 1087
    //   1080: bipush #124
    //   1082: istore #10
    //   1084: goto -> 1091
    //   1087: bipush #-52
    //   1089: istore #10
    //   1091: iload #10
    //   1093: ifle -> 1107
    //   1096: aload_0
    //   1097: iconst_0
    //   1098: iconst_0
    //   1099: iload #10
    //   1101: sipush #169
    //   1104: invokevirtual fillRect : (IIII)V
    //   1107: aload_0
    //   1108: iload #10
    //   1110: iconst_0
    //   1111: bipush #105
    //   1113: bipush #28
    //   1115: invokevirtual fillRect : (IIII)V
    //   1118: aload_0
    //   1119: iload #10
    //   1121: sipush #140
    //   1124: bipush #105
    //   1126: bipush #29
    //   1128: invokevirtual fillRect : (IIII)V
    //   1131: iload #10
    //   1133: sipush #176
    //   1136: if_icmpge -> 1161
    //   1139: aload_0
    //   1140: iload #10
    //   1142: bipush #105
    //   1144: iadd
    //   1145: iconst_0
    //   1146: sipush #176
    //   1149: iload #10
    //   1151: bipush #105
    //   1153: iadd
    //   1154: isub
    //   1155: sipush #169
    //   1158: invokevirtual fillRect : (IIII)V
    //   1161: iload #10
    //   1163: bipush #28
    //   1165: sipush #375
    //   1168: aload_0
    //   1169: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   1172: iload #10
    //   1174: bipush #105
    //   1176: iadd
    //   1177: bipush #28
    //   1179: sipush #376
    //   1182: aload_0
    //   1183: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   1186: iload #10
    //   1188: sipush #140
    //   1191: sipush #377
    //   1194: aload_0
    //   1195: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   1198: iload #10
    //   1200: bipush #105
    //   1202: iadd
    //   1203: sipush #140
    //   1206: sipush #378
    //   1209: aload_0
    //   1210: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   1213: return
    //   1214: iinc #11, 2
    //   1217: goto -> 949
    //   1220: iload_2
    //   1221: iconst_4
    //   1222: if_icmpne -> 1513
    //   1225: getstatic i.d : Z
    //   1228: ifeq -> 1513
    //   1231: iconst_0
    //   1232: istore #11
    //   1234: iload #11
    //   1236: getstatic h.a : [[B
    //   1239: iconst_0
    //   1240: aaload
    //   1241: arraylength
    //   1242: if_icmpge -> 1513
    //   1245: getstatic h.a : [[B
    //   1248: getstatic i.h : B
    //   1251: aaload
    //   1252: iload #11
    //   1254: baload
    //   1255: iload #5
    //   1257: if_icmpne -> 1507
    //   1260: getstatic h.a : [[B
    //   1263: getstatic i.h : B
    //   1266: aaload
    //   1267: iload #11
    //   1269: iconst_1
    //   1270: iadd
    //   1271: baload
    //   1272: iload #6
    //   1274: if_icmpne -> 1507
    //   1277: aload_0
    //   1278: iconst_0
    //   1279: iconst_0
    //   1280: sipush #176
    //   1283: sipush #169
    //   1286: invokevirtual fillRect : (IIII)V
    //   1289: getstatic i.h : B
    //   1292: getstatic i.a : [[I
    //   1295: iload #6
    //   1297: iconst_1
    //   1298: iadd
    //   1299: aaload
    //   1300: iload #5
    //   1302: iconst_1
    //   1303: iadd
    //   1304: iaload
    //   1305: if_icmpne -> 1315
    //   1308: bipush #88
    //   1310: istore #10
    //   1312: goto -> 1393
    //   1315: getstatic i.h : B
    //   1318: getstatic i.a : [[I
    //   1321: iload #6
    //   1323: iconst_1
    //   1324: iadd
    //   1325: aaload
    //   1326: iload #5
    //   1328: iconst_1
    //   1329: iadd
    //   1330: iaload
    //   1331: if_icmplt -> 1358
    //   1334: getstatic i.h : B
    //   1337: bipush #7
    //   1339: if_icmpne -> 1390
    //   1342: getstatic i.a : [[I
    //   1345: iload #6
    //   1347: iconst_1
    //   1348: iadd
    //   1349: aaload
    //   1350: iload #5
    //   1352: iconst_1
    //   1353: iadd
    //   1354: iaload
    //   1355: ifne -> 1390
    //   1358: getstatic i.h : B
    //   1361: ifne -> 1382
    //   1364: getstatic i.a : [[I
    //   1367: iload #6
    //   1369: iconst_1
    //   1370: iadd
    //   1371: aaload
    //   1372: iload #5
    //   1374: iconst_1
    //   1375: iadd
    //   1376: iaload
    //   1377: bipush #7
    //   1379: if_icmpeq -> 1390
    //   1382: sipush #176
    //   1385: istore #10
    //   1387: goto -> 1393
    //   1390: iconst_0
    //   1391: istore #10
    //   1393: iload #10
    //   1395: bipush #84
    //   1397: sipush #305
    //   1400: aload_0
    //   1401: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   1404: getstatic i.x : B
    //   1407: ifne -> 1423
    //   1410: iload #10
    //   1412: bipush #84
    //   1414: bipush #22
    //   1416: aload_0
    //   1417: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   1420: goto -> 1453
    //   1423: getstatic i.x : B
    //   1426: iconst_1
    //   1427: if_icmpne -> 1443
    //   1430: iload #10
    //   1432: bipush #84
    //   1434: bipush #23
    //   1436: aload_0
    //   1437: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   1440: goto -> 1453
    //   1443: iload #10
    //   1445: bipush #84
    //   1447: bipush #24
    //   1449: aload_0
    //   1450: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   1453: getstatic i.x : B
    //   1456: ifle -> 1470
    //   1459: iload #10
    //   1461: bipush #84
    //   1463: sipush #315
    //   1466: aload_0
    //   1467: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   1470: getstatic i.x : B
    //   1473: iconst_1
    //   1474: if_icmple -> 1488
    //   1477: iload #10
    //   1479: bipush #84
    //   1481: sipush #316
    //   1484: aload_0
    //   1485: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   1488: getstatic i.x : B
    //   1491: iconst_2
    //   1492: if_icmple -> 1506
    //   1495: iload #10
    //   1497: bipush #84
    //   1499: sipush #317
    //   1502: aload_0
    //   1503: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   1506: return
    //   1507: iinc #11, 2
    //   1510: goto -> 1234
    //   1513: aload_0
    //   1514: iconst_0
    //   1515: iconst_0
    //   1516: sipush #176
    //   1519: sipush #169
    //   1522: invokevirtual fillRect : (IIII)V
    //   1525: getstatic i.d : Z
    //   1528: ifeq -> 1542
    //   1531: bipush #88
    //   1533: bipush #84
    //   1535: sipush #379
    //   1538: aload_0
    //   1539: invokestatic a : (IIILjavax/microedition/lcdui/Graphics;)V
    //   1542: return
  }
  */
  
  static b(paramInt1, paramInt2, paramInt3, paramInt4, paramGraphics) {
    paramGraphics.setClip(paramInt1, paramInt2, paramInt3, paramInt4);
    let j = 0;
    let k = 42;
    while (true) {
      while (j < 176) {
        this.c.a(j, k, 269, paramGraphics);
        j += this.c.a(269, 2);
      }
      if (k < 126) {
        k += this.c.a(269, 3);
        j = 0;
        continue;
      }
      paramGraphics.setClip(0, 0, 176, 208);
      return;
    }
  }
  
  static a(paramInt, paramGraphics) {
    let b;
    for (b = 0; b < 5; b++) {
      let b1;
      if (b === 4) {
        b1 = 1;
      } else {
        b1 = 0;
      }
      let b2 = (this.d + this.h.a[this.h][b * 2]);
      let b3 = (this.e + this.h.a[this.h][b * 2 + 1]);
      let j = b * 35;
      let k = 35 + b1;
      let m = b + 4;
      if (paramInt === 1) {
        this.a(b2, b3, j, 76, k, 7, m, paramGraphics);
      } else if (paramInt === 0) {
        this.a(b2, b3, j, 76, k, 7, m, paramGraphics);
      } else if (paramInt === 2) {
        this.b(b2, b3, j, 76, k, 7, m, paramGraphics);
      }
    }
    for (b = 5; b < 8; b++) {
      let b1;
      if (b === 7) {
        b1 = 2;
      } else {
        b1 = 0;
      }
      let b2 = (this.d + this.h.a[this.h][b * 2]);
      let b3 = (this.e + this.h.a[this.h][b * 2 + 1]);
      let j = (b - 5) * 58;
      let k = 58 + b1;
      let m = b - 5 + 1;
      if (paramInt === 1) {
        this.a(b2, b3, j, 83, k, 20, m, paramGraphics);
      } else if (paramInt === 0) {
        this.a(b2, b3, j, 83, k, 20, m, paramGraphics);
      } else if (paramInt === 2) {
        this.b(b2, b3, j, 83, k, 20, m, paramGraphics);
      }
    }
    if (paramInt === 1) {
      this.a(this.d, this.e, 0, 103, 176, 66, 0, paramGraphics);
      return;
    }
    if (paramInt === 0) {
      this.a(this.d, this.e, 0, 103, 176, 66, 0, paramGraphics);
      return;
    }
    if (paramInt === 2) this.b(this.d, this.e, 0, 103, 176, 66, 0, paramGraphics);
  }
  
  static c(paramGraphics) {
    let j = this.a(0, true, true);
    let k = this.a(0, true, false);
    this.a(this.J, this.H, this.H + this.J, j, k, 0, this.H, 0, this.H + this.J, 176, this.H, 176, this.H + this.J, paramGraphics, 0, false);
    j = this.a(0, false, true);
    k = this.a(0, false, false);
    this.a(this.I - this.J, this.H + this.J, 169, j, k, 0, this.H + this.J, 0, 169, 176, this.H + this.J, 176, 169, paramGraphics, 0, false);
  }
  
  static d(paramGraphics) {
    let b1;
    let i4;
    let i6;
    let j = this.H * 70 / 100;
    if (this.i === 5) {
      b1 = 2;
    } else if (this.i === 6) {
      b1 = 3;
    } else if (this.i === 7) {
      b1 = 4;
    } else if (this.i === 17) {
      b1 = 5;
    } else if (this.i === 18) {
      b1 = 6;
    } else if (this.i === 19) {
      b1 = 7;
    } else if (this.i > 7 && this.i < 17) {
      b1 = 1;
    } else {
      b1 = 0;
    }
    let k = 0;
    let m = 0;
    let n = 0;
    let i1 = 0;
    let i2;
    let i3 = (i2 = -128 + this.h * 32) + 64;
    if (b1 && b1 !== 1) {
      if (i3 > 128) {
        k = 1000 * (this.a[(b1 - 2) * 2] + 128 + 32) / 64 * 176 / 1000;
        m = 1000 * this.a[(b1 - 2) * 2 + 1] / 128 * this.H / 1000;
        n = 1000 * (this.b[(b1 - 2) * 2] + 128 + 32) / 64 * 176 / 1000;
        i1 = 1000 * this.b[(b1 - 2) * 2 + 1] / 128 * this.H / 1000;
      } else {
        k = 1000 * (this.a[(b1 - 2) * 2] - i2) / 64 * 176 / 1000;
        m = 1000 * this.a[(b1 - 2) * 2 + 1] / 128 * this.H / 1000;
        n = 1000 * (this.b[(b1 - 2) * 2] - i2) / 64 * 176 / 1000;
        i1 = 1000 * this.b[(b1 - 2) * 2 + 1] / 128 * this.H / 1000;
      }
      this.K = i1 + 11;
    }
    if (this.C !== 0 && !this.a()) {
      i6 = 1441792;
    } else if (this.a(this.d, this.e, 6) && b1 === 0) {
      i6 = 5632;
    } else if (this.a(this.d, this.e, 5) && b1 === 0) {
      i6 = 1441792;
    }
    this.a(j, 0, j, false, i6, 0, 0, 0, j, 176, 0, 176, j, paramGraphics, 0, false);
    let i5;
    if (this.C !== 0 && !this.a()) {
      i4 = 1441792;
      i5 = 6684672;
    } else if (this.a(this.d, this.e, 6) && b1 === 0) {
      i4 = 5632;
      i5 = 26112;
    } else if (this.a(this.d, this.e, 5) && b1 === 0) {
      i4 = 1441792;
      i5 = 6684672;
    }
    this.a(this.H - j, j, this.H, i4, i5, 0, j, 0, this.H, 176, j, 176, this.H, paramGraphics, 0, false);
    if (!this.a())
      for (i4 = 0; i4 < this.b.length; i4 += 2) {
        paramGraphics.setColor(this.c[this.c[i4 >> 1] - 1]);
        if (this.b[i4] >= i2 && this.b[i4] <= i3) {
          paramGraphics.fillRect(1000 * (this.b[i4] - i2) / 64 * 176 / 1000, 1000 * this.b[i4 + 1] / 128 * this.H / 1000, 1, 1);
        } else if (i3 > 128 && this.b[i4] <= -96) {
          paramGraphics.fillRect(1000 * (this.b[i4] + 128 + 32) / 64 * 176 / 1000, 1000 * this.b[i4 + 1] / 128 * this.H / 1000, 1, 1);
        }
      }
    if (b1 !== 0 && b1 !== 1) {
      if (this.i !== 19)
        this.c.a(k, m, 374, paramGraphics);
      paramGraphics.setColor(10066329);
      if (this.E !== 0)
        paramGraphics.setColor(9838881);
      switch (i4 = this.z / 90) {
        case 0:
          if (this.C !== 0 || this.E !== 0) {
            this.c.a(n, i1, 370, paramGraphics);
            break;
          }
          this.c.a(n, i1, 363, paramGraphics);
          break;
        case 1:
          if (this.C !== 0 || this.E !== 0) {
            this.c.a(n, i1, 371, paramGraphics);
            break;
          }
          this.c.a(n, i1, 364, paramGraphics);
          break;
        case 2:
          if (this.C !== 0 || this.E !== 0) {
            this.c.a(n, i1, 372, paramGraphics);
            break;
          }
          this.c.a(n, i1, 365, paramGraphics);
          break;
        case 3:
          if (this.C !== 0 || this.E !== 0) {
            this.c.a(n, i1, 373, paramGraphics);
            break;
          }
          this.c.a(n, i1, 366, paramGraphics);
          break;
        case 5:
          if (this.C !== 0 || this.E !== 0) {
            this.c.a(n, i1, 367, paramGraphics);
            break;
          }
          this.c.a(n, i1, 360, paramGraphics);
          break;
        case 6:
          if (this.C !== 0 || this.E !== 0) {
            this.c.a(n, i1, 368, paramGraphics);
            break;
          }
          this.c.a(n, i1, 361, paramGraphics);
          break;
        case 7:
          if (this.C !== 0 || this.E !== 0) {
            this.c.a(n, i1, 369, paramGraphics);
            break;
          }
          this.c.a(n, i1, 362, paramGraphics);
          break;
      }
    }
    let i7;
    for (i7 = 0; i7 < this.e.length; i7 += 2) {
      if ((i5 = this.e[i7 + 1] / 21) < 0) {
        i5 = 0;
      } else if (i5 > 5) {
        i5 = 5;
      }
      if (this.e[i7] >= i2 - 30 && this.e[i7] <= i3 + 30) {
        if (b1 === 0 || this.i === 19) {
          this.c.a(1000 * (this.e[i7] - i2) / 64 * 176 / 1000, 1000 * this.e[i7 + 1] / 128 * this.H / 1000, this.l[i5], paramGraphics);
        } else if (this.f[i7 >> 1] === 0) {
          this.c.a(1000 * (this.e[i7] - i2) / 64 * 176 / 1000, 1000 * this.e[i7 + 1] / 128 * this.H / 1000, this.m[i5], paramGraphics);
        } else {
          this.c.a(1000 * (this.e[i7] - i2) / 64 * 176 / 1000, 1000 * this.e[i7 + 1] / 128 * this.H / 1000, this.k[i5], paramGraphics);
        }
      } else if (i3 > 128 && this.e[i7] <= -66) {
        if (b1 === 0 || this.i === 19) {
          this.c.a(1000 * (this.e[i7] + 128 + 32) / 64 * 176 / 1000, 1000 * this.e[i7 + 1] / 128 * this.H / 1000, this.l[i5], paramGraphics);
        } else if (this.f[i7 >> 1] === 0) {
          this.c.a(1000 * (this.e[i7] + 128 + 32) / 64 * 176 / 1000, 1000 * this.e[i7 + 1] / 128 * this.H / 1000, this.m[i5], paramGraphics);
        } else {
          this.c.a(1000 * (this.e[i7] + 128 + 32) / 64 * 176 / 1000, 1000 * this.e[i7 + 1] / 128 * this.H / 1000, this.k[i5], paramGraphics);
        }
      }
    }
    i7 = (i5 = this.h * 88) + 176;
    let i8 = 0;
    let b2;
    for (b2 = 0; b2 < this.i.length; b2++) {
      if (i8 + this.j[b2] >= i7)
        this.a(i8 - i7, this.H, this.i[b2], paramGraphics);
      if ((i8 += this.j[b2]) > i7)
        return;
    }
    if (i8 < 704)
      while (i8 < 704 && i8 <= i7) {
        this.a(i8 - i7, this.H, this.i[this.i.length - 1], paramGraphics);
        i8 += this.j[this.i.length - 1];
      }
    for (b2 = 0; b2 < 2; b2++) {
      this.a(i8 - i7, this.H, this.i[b2], paramGraphics);
      if ((i8 += this.j[b2]) > i7)
        return;
    }
  }
  
  static a(paramByte1, paramByte2, paramInt1, paramInt2, paramInt3, paramInt4, paramInt5, paramGraphics) {
    let j = 0;
    let k = 0;
    let b1 = 0;
    let bool1 = false;
    let m = paramInt4;
    let n = paramInt2;
    let bool2;
    if (paramByte1 >= 0 && paramByte1 < this.b && paramByte2 >= 0 && paramByte2 < this.c) {
      bool2 = this.a(paramByte1, paramByte2, 0, 7);
    } else {
      bool2 = false;
    }
    if (bool2 === 7) {
      b1 = 1;
      if (paramInt2 < this.H + this.J && paramInt2 + paramInt4 > this.H + this.J)
        b1 = 2;
    }
    for (let b2 = 0; b2 < b1; b2++) {
      if (paramInt2 < this.H + this.J) {
        bool1 = true;
      } else {
        bool1 = false;
      }
      if (b1 === 2)
        if (bool1) {
          paramInt4 = this.H + this.J - paramInt2;
        } else {
          paramInt4 = paramInt2 + m - this.H + this.J;
        }
      j = this.a(paramByte1, paramByte2, bool1, true);
      k = this.a(paramByte1, paramByte2, bool1, false);
      if (bool1) {
        this.a(paramInt4, this.H, this.H + this.J, j, k, paramInt1, paramInt2, paramInt1, paramInt2 + m, paramInt1 + paramInt3, paramInt2, paramInt1 + paramInt3, paramInt2 + m, paramGraphics, paramByte1, paramByte2, paramInt5, paramInt3, m, 0);
        paramInt2 = this.H + this.J;
      } else {
        this.a(paramInt4, this.H + this.J, 169, j, k, paramInt1, n, paramInt1, n + m, paramInt1 + paramInt3, n, paramInt1 + paramInt3, n + m, paramGraphics, paramByte1, paramByte2, paramInt5, paramInt3, m, this.H + this.J - n);
      }
    }
  }
  
  static b(paramByte1, paramByte2, paramInt1, paramInt2, paramInt3, paramInt4, paramInt5, paramGraphics) {
    this.b(paramInt1, paramInt2, paramInt3, paramInt4, paramByte1, paramByte2, paramGraphics);
    this.a(paramInt1, paramInt2, paramInt3, paramInt4, paramByte1, paramByte2, paramGraphics);
    if (paramInt4 === 66 && this.h.a !== null)
      this.a(paramInt1, paramInt2, paramInt3, paramInt4, paramByte1, paramByte2, paramGraphics, true);
    this.a(paramInt1, paramInt2, paramInt3, paramInt4, paramByte1, paramByte2, paramGraphics, false);
  }
  
  static a(paramInt1, paramInt2, paramInt3, paramInt4, paramInt5, paramInt6, paramGraphics) {
    let j = this.a(paramInt5, paramInt6, 13, 57344);
    let k = 0;
    if (j !== 2 && j !== 4)
      return;
    switch (paramInt4) {
      case 66:
        return;
      case 20:
        k = this.c.a(262, 3) / 4;
        break;
      case 7:
        k = this.c.a(263, 3) / 4;
        break;
    }
    if (k > 0) {
      if (j === 4 && this.I !== 0)
        return;
      paramGraphics.setColor(0);
      let m = paramInt1 + (paramInt3 >> 1) - (k >> 1);
      let n = paramInt2 + (paramInt4 >> 1) - k;
      paramGraphics.fillRect(m, n + 1, k, k);
      paramGraphics.fillArc(m, n - (k >> 1) + 1, k, k, 0, 360);
    }
  }
  
  static a(paramInt1, paramInt2, paramInt3, paramInt4, paramInt5, paramGraphics) {
    let s1 = -1;
    let s2 = -1;
    let j = this.a(paramInt4, paramInt5, 13, 57344);
    let bool = this.a(paramInt4, paramInt5, 4);
    switch (j) {
      case 3:
        return;
      case 0:
      case 1:
        switch (paramInt3) {
          case 66:
            s1 = 266;
            if (bool)
              s2 = 357;
            break;
          case 20:
            s1 = 267;
            if (bool)
              s2 = 359;
            break;
          case 7:
            s1 = 268;
            if (bool)
              s2 = 358;
            break;
        }
        break;
    }
    if (s1 !== -1) {
      if (s2 !== -1)
        this.c.a(paramInt1, paramInt2, s2, paramGraphics);
      this.c.a(paramInt1, paramInt2, s1, paramGraphics);
    }
  }
  
  static a(paramInt1, paramInt2, paramInt3, paramInt4, paramInt5, paramGraphics, paramBoolean) {
    let b = -1;
    switch (paramInt3) {
      case 66:
        if (paramBoolean) {
          b = 19;
          break;
        } 
        b = 18;
        break;
      case 20:
        b = 20;
        break;
      case 7:
        b = 21;
        break;
    } 
    if (b !== -1)
      a(paramInt1, paramInt2, b, paramGraphics); 
  }
  
  static c(paramInt1, paramInt2) {
    if (paramInt2 <= 103)
      return false; 
    if (a(d, e, 0, 7) !== 7)
      return false; 
    let bool = false;
    let j = 0;
    let k = 176;
    let m = 0;
    let n = 0;
    let i1 = 0;
    let i2 = 0;
    let i3 = a(d, e);
    if (!h || h === 4 || h === 2 || h === 6) {
      i1 = (h.a[0][i3 * 4 + 1] * 10 << 8) / 1000 * 176 >> 8;
      i2 = (h.a[0][i3 * 4 + 3] * 10 << 8) / 1000 * 176 >> 8;
      m = (h.a[0][i3 * 4] * 10 << 8) / 1000 * 176 >> 8;
      n = (h.a[0][i3 * 4 + 2] * 10 << 8) / 1000 * 176 >> 8;
    } else {
      i1 = (h.j[0][i3 * 4 + 1] * 10 << 8) / 1000 * 176 >> 8;
      i2 = (h.j[0][i3 * 4 + 3] * 10 << 8) / 1000 * 176 >> 8;
      m = (h.j[0][i3 * 4] * 10 << 8) / 1000 * 176 >> 8;
      n = (h.j[0][i3 * 4 + 2] * 10 << 8) / 1000 * 176 >> 8;
    } 
    if (m !== n)
      j = a(0, paramInt2, paramInt1 + 176, paramInt2, m, 103, n, 169); 
    if (i1 !== i2)
      k = a(0, paramInt2, paramInt1 + 176, paramInt2, i1, 103, i2, 169); 
    return (j === -1 || k === -1) ? false : (!(paramInt1 < j || paramInt1 > k));
  }
  
  static a(paramInt1, paramInt2, paramInt3, paramInt4, paramInt5, paramInt6, paramInt7, paramGraphics) {
    let j = paramInt3;
    let k = paramInt4;
    let m = (169 - H) / 5;
    let n = 0;
    let i1 = 0;
    let i2 = 0;
    let i3;
    if ((i3 = a(paramInt1, paramInt2, 0, 7)) === -1)
      i3 = 0; 
    let i4 = 0;
    let i5 = 0;
    let i6 = 0;
    let i7 = 0;
    let i8 = 0;
    let i9 = 0;
    let i10 = 0;
    if (i3 === 7) {
      i4 = a(paramInt1, paramInt2);
      if (!h || h === 4 || h === 2 || h === 6) {
        i7 = paramInt3 + ((h.a[paramInt7][i4 * 4 + 1] * 10 << 8) / 1000 * paramInt5 >> 8);
        i8 = paramInt3 + ((h.a[paramInt7][i4 * 4 + 3] * 10 << 8) / 1000 * paramInt5 >> 8);
        i5 = paramInt3 + ((h.a[paramInt7][i4 * 4] * 10 << 8) / 1000 * paramInt5 >> 8);
        i6 = paramInt3 + ((h.a[paramInt7][i4 * 4 + 2] * 10 << 8) / 1000 * paramInt5 >> 8);
      } else {
        i7 = paramInt3 + ((h.j[paramInt7][i4 * 4 + 1] * 10 << 8) / 1000 * paramInt5 >> 8);
        i8 = paramInt3 + ((h.j[paramInt7][i4 * 4 + 3] * 10 << 8) / 1000 * paramInt5 >> 8);
        i5 = paramInt3 + ((h.j[paramInt7][i4 * 4] * 10 << 8) / 1000 * paramInt5 >> 8);
        i6 = paramInt3 + ((h.j[paramInt7][i4 * 4 + 2] * 10 << 8) / 1000 * paramInt5 >> 8);
      } 
    } 
    while (true) {
      let b;
      let i13;
      if ((i13 = Math.abs(k - 169)) < 2 * m) {
        b = 4;
      } else if (i13 < 3 * m) {
        b = 3;
      } else if (i13 < 4 * m) {
        b = 2;
      } else if (i13 < 4 * m + m / 2 + m / 3) {
        b = 1;
      } else {
        b = 0;
      } 
      if (b) {
        b = 0;
      } else if (b > 4) {
        b = 4;
      } 
      let i11 = -1;
      let i12 = 666;
      if (i3 === 7) {
        if (i5 !== i6)
          i11 = a(0, k, j + 176, k, i5, paramInt4, i6, paramInt4 + paramInt6); 
        if (i7 !== i8 && (i12 = a(0, k, j + 176, k, i7, paramInt4, i8, paramInt4 + paramInt6)) === -1)
          i12 = 666; 
      } 
      while (true) {
        let b1;
        if (!i2) {
          let i14;
          if ((i14 = a(0, 100, b)) <= h.a[i3 * 4]) {
            n = 159;
          } else if (i14 <= h.a[i3 * 4] + h.a[i3 * 4 + 1]) {
            n = 174;
          } else if (i14 <= h.a[i3 * 4] + h.a[i3 * 4 + 1] + h.a[i3 * 4 + 2]) {
            n = 189;
          } else {
            n = 204;
          } 
          if (n === -1)
            n = 159; 
          i1 = n;
          i2 = a(1, 3, b);
        } 
        n = (n = i1 + a(0, 2, b)) - 3 * b;
        if (paramInt6 === 66) {
          b1 = 2;
        } else if (paramInt6 === 20) {
          b1 = 1;
        } else {
          b1 = 0;
        } 
        if (i3 !== 7 || j < i11 || j > i12)
          c.a(j + a(-b1, b1, b), k + a(-b1, b1, b), n, paramGraphics); 
        if (j === paramInt3 + paramInt5) {
          if (i11 !== -1)
            c.a(i11, k, n, paramGraphics); 
          if (i12 !== 666)
            c.a(i12, k, n, paramGraphics); 
          if (k === paramInt4 + paramInt6)
            return; 
          j = paramInt3;
          if ((i10 = c.a(n, 3) / 2) === 0)
            i10 = 1; 
          break;
        } 
        i9 = c.a(n, 2);
        if (paramInt6 === 66)
          i9 -= c.a(n, 2) / 5; 
        if (i9 === 0)
          i9 = 1; 
        if ((j += i9) > paramInt3 + paramInt5)
          j = paramInt3 + paramInt5; 
        i2--;
      } 
      if ((k += i10) > paramInt4 + paramInt6)
        k = paramInt4 + paramInt6; 
    } 
  }
  
  static a(paramInt1, paramInt2, paramInt3, paramInt4, paramInt5, paramInt6, paramInt7, paramInt8) {
    let j;
    if ((j = paramInt1 * (paramInt8 - paramInt6) + paramInt3 * (paramInt6 - paramInt8) + paramInt7 * (paramInt4 - paramInt2) + paramInt5 * (paramInt2 - paramInt4)) === 0)
      return -1; 
    let k = (paramInt1 * (paramInt8 - paramInt6) + paramInt5 * (paramInt2 - paramInt8) + paramInt7 * (paramInt6 - paramInt2) << 8) / j;
    return paramInt1 + (k * (paramInt3 - paramInt1) >> 8);
  }
  
  static a(paramInt1, paramInt2, paramInt3, paramInt4, paramInt5, paramInt6, paramGraphics, paramBoolean) {
    let j = 0;
    let k = 0;
    let m = 0;
    let n = 0;
    j = a(paramInt5, paramInt6, 0, 7);
    if (!paramBoolean) {
      k = a(paramInt5, paramInt6, 5, 480);
    } else if ((k = a((paramInt5 + 1), paramInt6, 5, 480)) === -1 || k === 6) {
      k = 0;
    } 
    n = a(paramInt5, paramInt6, 13, 57344);
    let bool1 = b(paramInt5, paramInt6, 5, 0);
    let bool2 = b(paramInt5, paramInt6, 5, 2);
    if (n === 2 || n === 4)
      return; 
    if (j === 2 || j === 5 || j === 1 || j === 4 || n === 1 || n === 0 || (paramBoolean && j !== 7 && j !== 6)) {
      m = k * 8 * a * 3;
    } else {
      return;
    } 
    if (paramBoolean && a(0, 100, c) < 65)
      return; 
    let i1 = 0;
    let i2 = 0;
    let i3 = (169 - H) / 11;
    i1 = paramInt5 - d;
    i2 = paramInt6 - e;
    switch (h) {
      case false:
        i1 += 2;
        i2 += 2;
        m += a[i2][i1] * a * 3;
        break;
      case true:
        i1 += 2;
        i2 += 0;
        m += b[i2][i1] * a * 3;
        break;
      case true:
        i1 += 0;
        i2 += 2;
        m += c[i2][i1] * a * 3;
        break;
      case true:
        i1 += 2;
        i2 += 2;
        m += d[i2][i1] * a * 3;
        break;
      case true:
        i1 += 2;
        i2 += 2;
        m += h[i2][i1] * a * 3;
        break;
      case true:
        i1 += 0;
        i2 += 2;
        m += e[i2][i1] * a * 3;
        break;
      case true:
        i1 += 0;
        i2 += 0;
        m += f[i2][i1] * a * 3;
        break;
      case true:
        i1 += 2;
        i2 += 0;
        m += g[i2][i1] * a * 3;
        break;
    } 
    let bool = true;
    let b = -1;
    if (!paramBoolean && (n === 1 || n === 0 || bool1 || bool2))
      b = 0; 
    for (let b1 = 0; b1 < a * 3; b1 += 3) {
      let bool3;
      i1 = ((a[b1 + m] << 8) / 100 * paramInt3 >> 8) + paramInt1;
      i2 = ((a[b1 + 1 + m] << 8) / 100 * paramInt4 >> 8) + paramInt2;
      let f1 = a[b1 + 2 + m];
      if (!paramBoolean) {
        if ((bool3 = (i2 - H) / i3) < 0) {
          bool3 = false;
        } else if (bool3 > 10) {
          bool3 = true;
        } 
      } else if (i2 > paramInt2 + 33) {
        bool3 = true;
      } else {
        bool3 = false;
      } 
      if (f1 === b) {
        if ((n === 1 || n === 0) && c === null) {
          a(i1, i2, paramInt4, paramInt5, paramInt6, paramGraphics);
        } else if (bool1) {
          a(i1, i2, paramInt4, paramInt5, paramInt6, paramGraphics, false);
        } else if (bool2) {
          a(i1, i2, paramInt4, paramInt5, paramInt6, paramGraphics, true);
        } 
      } else if (j === 5 || j === 2 || bool || paramBoolean) {
        if (paramBoolean && a(0, 100, c) < 30) {
          if (a(0, 100, c) < 30) {
            if (!bool3) {
              c.a(i1, i2, a(b), paramGraphics);
            } else {
              c.a(i1, i2, a(a), paramGraphics);
            } 
          } else {
            switch (j) {
              case 0:
                if (!bool3) {
                  c.a(i1, i2, a(h), paramGraphics);
                  break;
                } 
                c.a(i1, i2, a(g), paramGraphics);
                break;
              case 1:
              case 2:
                if (!bool3) {
                  c.a(i1, i2, a, paramGraphics);
                  break;
                } 
                c.a(i1, i2, a(e), paramGraphics);
                break;
              case 4:
              case 5:
                if (!bool3) {
                  c.a(i1, i2, a(d), paramGraphics);
                  break;
                } 
                c.a(i1, i2, a(c), paramGraphics);
                break;
            } 
          } 
        } else if (!paramBoolean && (paramInt4 !== 66 || i1 < 44 + 2 * (169 - i2) / 3 || i1 > 132 - 2 * (169 - i2) / 3) && (j === 2 || j === 5 || j === 1 || j === 4)) {
          a(i1, i2, h.f[bool3], paramGraphics);
        } 
      } 
      bool = !bool ? true : false;
    } 
  }
  
  static a(paramArrayOfshort) {
    return paramArrayOfshort[a(0, paramArrayOfshort.length - 1, c)];
  }
  
  static b(paramInt1, paramInt2, paramInt3, paramInt4, paramInt5, paramInt6, paramGraphics) {
    let j;
    if ((j = a(paramInt5, paramInt6, 0, 7)) !== 6)
      return; 
    let k = paramInt1 + (paramInt3 >> 1) + a(-3, 3, b);
    let m = paramInt2 + (paramInt4 >> 1) + a(-1, 1, b);
    if (paramInt4 === 20) {
      if ((i >= 19 && i <= 23) || (i >= null && i <= 4)) {
        c.a(k, m, 264, paramGraphics);
        return;
      } 
      c.a(k, m, 262, paramGraphics);
      return;
    } 
    if (paramInt4 === 7) {
      if ((i >= 19 && i <= 23) || (i >= null && i <= 4)) {
        c.a(k, m, 265, paramGraphics);
        return;
      } 
      c.a(k, m, 263, paramGraphics);
    } 
  }
  
  static e(paramGraphics) {
    s = (d - 2);
    if (s < null) {
      s = false;
    } else if (s > b - 5) {
      s = (b - 5);
    } 
    t = (e - 2);
    if (t < null) {
      t = false;
    } else if (t > c - 5) {
      t = (c - 5);
    } 
    let arrayOfInt = s;
    while (arrayOfInt < s + 5) {
      let arrayOfInt1 = t;
      while (arrayOfInt1 < t + 5) {
        a(arrayOfInt, arrayOfInt1, s, t, paramGraphics);
        let b1 = (arrayOfInt1 + 1);
      } 
      let b = (arrayOfInt + 1);
    } 
    c.a((d - s) * 9 + 4, (e - t) * 9 + 4, g[h], paramGraphics);
  }
  
  a(paramInt1, paramInt2, paramInt3, paramInt4, paramGraphics) {
    let j = c.a(216, 2);
    paramGraphics.setClip(paramInt1 - j, paramInt2 - j, paramInt3 + (j << 1), paramInt4 + (j << 1));
    let b;
    for (b = 0; b < paramInt3 / j + 1; b++) {
      c.a(paramInt1 + j * b, paramInt2 - j, 220, paramGraphics);
      c.a(paramInt1 + j * b, paramInt2 + paramInt4, 220, paramGraphics);
    } 
    for (b = 0; b < paramInt4 / j + 1; b++) {
      c.a(paramInt1 - j, paramInt2 + j * b, 221, paramGraphics);
      c.a(paramInt1 + paramInt3, paramInt2 + j * b, 221, paramGraphics);
    } 
    paramGraphics.setClip(0, 0, p.b, p.c);
    c.a(paramInt1 - j, paramInt2 - j, 216, paramGraphics);
    c.a(paramInt1 + paramInt3, paramInt2 - j, 218, paramGraphics);
    c.a(paramInt1 - j, paramInt2 + paramInt4, 217, paramGraphics);
    c.a(paramInt1 + paramInt3, paramInt2 + paramInt4, 219, paramGraphics);
  }
  
  static b(paramBoolean, paramGraphics) {
    let b1 = -1;
    if (!paramBoolean) {
      let b;
      for (b = 0; b < C.length; b++)
        C[b] = -1; 
      for (b = 0; b < t.length; b++)
        t[b] = -1; 
    } 
    for (let b2 = -1; b2 < 2; b2++) {
      for (let b = -1; b < 2; b++) {
        b1 = (b1 + 1);
        if (d + b2 >= 0 && d + b2 < b && e + b >= 0 && e + b < c && (b2 !== 0 || b !== 0)) {
          let j = a((d + b2), (e + b), 13, 57344);
          if (b((d + b2), (e + b), 1, 1) && m === -1) {
            if (!paramBoolean) {
              let arrayOfString;
              (arrayOfString = new String[1])[0] = c.a(h.a[a[b + 1][b2 + 1]]);
              C[b1] = 104;
              if (!d(f[0], 0))
                a(100, arrayOfString, 75); 
            } else {
              c.a((d + b2 - s) * 9 + 4, (e + b - t) * 9 + 4, 104, paramGraphics);
            } 
          } else if (a((d + b2), (e + b), 2) && !P) {
            if (!paramBoolean) {
              let arrayOfString;
              (arrayOfString = new String[1])[0] = c.a(h.a[a[b + 1][b2 + 1]]);
              C[b1] = 100;
              if (!d(f[0], 0))
                a(96, arrayOfString, 73); 
              c((d + b2), (e + b));
              t[b1] = 201;
            } else {
              c.a((d + b2 - s) * 9 + 4, (e + b - t) * 9 + 4, 100, paramGraphics);
            } 
          } else if (a((d + b2), (e + b), 6) && !a((d + b2), (e + b), 6)) {
            if (!paramBoolean) {
              let arrayOfString;
              (arrayOfString = new String[1])[0] = c.a(h.a[a[b + 1][b2 + 1]]);
              C[b1] = 100;
              if (!d(f[0], 0))
                a(127, arrayOfString, 73); 
              c((d + b2), (e + b));
            } else {
              c.a((d + b2 - s) * 9 + 4, (e + b - t) * 9 + 4, 100, paramGraphics);
            } 
          } else if (a((d + b2), (e + b), 5) && !a((d + b2), (e + b), 5)) {
            if (!paramBoolean) {
              let arrayOfString;
              (arrayOfString = new String[1])[0] = c.a(h.a[a[b + 1][b2 + 1]]);
              C[b1] = -1;
              if (!d(f[0], 0))
                a(226, arrayOfString, 73); 
              c((d + b2), (e + b));
            } else {
              c.a((d + b2 - s) * 9 + 4, (e + b - t) * 9 + 4, 100, paramGraphics);
            } 
          } else if ((j === 0 || j === 1 || j === 2 || j === 4) && (!a((d + b2), (e + b)) || paramBoolean)) {
            if (!paramBoolean) {
              let arrayOfString;
              (arrayOfString = new String[1])[0] = c.a(h.a[a[b + 1][b2 + 1]]);
              C[b1] = -1;
              a(97, arrayOfString, 72);
              b((d + b2), (e + b));
            } else {
              if (j === 0 || j === 1) {
                c.a((d + b2 - s) * 9 + 4, (e + b - t) * 9 + 4, 97, paramGraphics);
              } else {
                c.a((d + b2 - s) * 9 + 4, (e + b - t) * 9 + 4, 98, paramGraphics);
              } 
              if ((g[d + b2 + (e + b) * b] & 0x2) === 0)
                b((d + b2 - s) * 9, (e + b - t) * 9, 9, paramGraphics); 
            } 
          } else {
            for (let b3 = 0; b3 < h.length; b3++) {
              if (i[b3] === d + b2 && j[b3] === e + b && a[b3] !== null) {
                let k = a(d, e, 0, 7);
                let m = a((d + b2), (e + b), 0, 7);
                let arrayOfString;
                (arrayOfString = new String[1])[0] = c.a(h.a[a[b + 1][b2 + 1]]);
                switch (h[b3]) {
                  case false:
                  case true:
                    if ((k === 0 || k === 3 || k === 7) && (m === 0 || m === 3)) {
                      if (!paramBoolean) {
                        C[b1] = 100;
                        if (!d(b3, 2))
                          a(84, arrayOfString, 73); 
                        if (!h[b3]) {
                          t[b1] = 103;
                          break;
                        } 
                        t[b1] = 109;
                        break;
                      } 
                      c.a((d + b2 - s) * 9 + 4, (e + b - t) * 9 + 4, 100, paramGraphics);
                    } 
                    break;
                  case true:
                    if (!paramBoolean) {
                      C[b1] = 101;
                      if (!d(b3, 2))
                        a(188, arrayOfString, 34); 
                      t[b1] = 104;
                      if (h.e !== 0 && !ai) {
                        a(197, null, -1);
                        ai = true;
                      } 
                      break;
                    } 
                    c.a((d + b2 - s) * 9 + 4, (e + b - t) * 9 + 4, 101, paramGraphics);
                    break;
                  case true:
                    if (!paramBoolean) {
                      C[b1] = 101;
                      if (!d(b3, 2))
                        a(93, arrayOfString, 29); 
                      t[b1] = 105;
                      if (h.e !== 0 && !af) {
                        a(194, null, -1);
                        af = true;
                      } 
                      break;
                    } 
                    c.a((d + b2 - s) * 9 + 4, (e + b - t) * 9 + 4, 101, paramGraphics);
                    break;
                  case true:
                    if ((k === 0 || k === 3 || k === 7) && (m === 0 || m === 3)) {
                      if (!paramBoolean) {
                        C[b1] = 100;
                        if (!d(b3, 2))
                          a(84, arrayOfString, 73); 
                        t[b1] = 106;
                        break;
                      } 
                      c.a((d + b2 - s) * 9 + 4, (e + b - t) * 9 + 4, 100, paramGraphics);
                    } 
                    break;
                  case true:
                    if (!paramBoolean) {
                      C[b1] = 101;
                      if (!d(b3, 2))
                        a(94, arrayOfString, 35); 
                      t[b1] = 110;
                      break;
                    } 
                    c.a((d + b2 - s) * 9 + 4, (e + b - t) * 9 + 4, 101, paramGraphics);
                    break;
                  case true:
                    if (!paramBoolean) {
                      C[b1] = 101;
                      if (!d(b3, 2))
                        a(99, arrayOfString, 68); 
                      t[b1] = 107;
                      break;
                    } 
                    c.a((d + b2 - s) * 9 + 4, (e + b - t) * 9 + 4, 101, paramGraphics);
                    break;
                  case true:
                    if (!paramBoolean) {
                      C[b1] = 101;
                      if (!d(b3, 2))
                        a(98, arrayOfString, 68); 
                      t[b1] = 108;
                      break;
                    } 
                    c.a((d + b2 - s) * 9 + 4, (e + b - t) * 9 + 4, 101, paramGraphics);
                    break;
                } 
                break;
              } 
            } 
          } 
        } 
      } 
    } 
  }
  
  static d(paramInt1, paramInt2) {
    // Byte code:
    //   0: iload_1
    //   1: tableswitch default -> 178, 0 -> 28, 1 -> 103, 2 -> 106
    //   28: iconst_0
    //   29: istore_2
    //   30: iload_2
    //   31: getstatic i.n : [I
    //   34: arraylength
    //   35: if_icmpge -> 61
    //   38: getstatic i.n : [I
    //   41: iload_2
    //   42: iaload
    //   43: iload_0
    //   44: if_icmpne -> 55
    //   47: getstatic i.D : [B
    //   50: iload_2
    //   51: iconst_2
    //   52: bastore
    //   53: iconst_1
    //   54: ireturn
    //   55: iinc #2, 1
    //   58: goto -> 30
    //   61: iconst_0
    //   62: istore_2
    //   63: iload_2
    //   64: getstatic i.n : [I
    //   67: arraylength
    //   68: if_icmpge -> 100
    //   71: getstatic i.n : [I
    //   74: iload_2
    //   75: iaload
    //   76: iconst_m1
    //   77: if_icmpne -> 94
    //   80: getstatic i.n : [I
    //   83: iload_2
    //   84: iload_0
    //   85: iastore
    //   86: getstatic i.D : [B
    //   89: iload_2
    //   90: iconst_2
    //   91: bastore
    //   92: iconst_0
    //   93: ireturn
    //   94: iinc #2, 1
    //   97: goto -> 63
    //   100: goto -> 178
    //   103: goto -> 178
    //   106: iconst_0
    //   107: istore_2
    //   108: iload_2
    //   109: getstatic i.o : [I
    //   112: arraylength
    //   113: if_icmpge -> 139
    //   116: getstatic i.o : [I
    //   119: iload_2
    //   120: iaload
    //   121: iload_0
    //   122: if_icmpne -> 133
    //   125: getstatic i.E : [B
    //   128: iload_2
    //   129: iconst_2
    //   130: bastore
    //   131: iconst_1
    //   132: ireturn
    //   133: iinc #2, 1
    //   136: goto -> 108
    //   139: iconst_0
    //   140: istore_2
    //   141: iload_2
    //   142: getstatic i.o : [I
    //   145: arraylength
    //   146: if_icmpge -> 178
    //   149: getstatic i.o : [I
    //   152: iload_2
    //   153: iaload
    //   154: iconst_m1
    //   155: if_icmpne -> 172
    //   158: getstatic i.o : [I
    //   161: iload_2
    //   162: iload_0
    //   163: iastore
    //   164: getstatic i.E : [B
    //   167: iload_2
    //   168: iconst_2
    //   169: bastore
    //   170: iconst_0
    //   171: ireturn
    //   172: iinc #2, 1
    //   175: goto -> 141
    //   178: iconst_0
    //   179: ireturn
  }
  
  static t() {
    // Byte code:
    //   0: iconst_0
    //   1: istore_0
    //   2: iload_0
    //   3: getstatic i.D : [B
    //   6: arraylength
    //   7: if_icmpge -> 87
    //   10: getstatic i.D : [B
    //   13: iload_0
    //   14: baload
    //   15: ifle -> 81
    //   18: getstatic i.D : [B
    //   21: iload_0
    //   22: dup2
    //   23: baload
    //   24: iconst_1
    //   25: isub
    //   26: i2b
    //   27: bastore
    //   28: getstatic i.D : [B
    //   31: iload_0
    //   32: baload
    //   33: ifne -> 81
    //   36: getstatic i.s : [B
    //   39: getstatic i.n : [I
    //   42: iload_0
    //   43: iaload
    //   44: baload
    //   45: getstatic i.d : B
    //   48: if_icmpne -> 75
    //   51: getstatic i.t : [B
    //   54: getstatic i.n : [I
    //   57: iload_0
    //   58: iaload
    //   59: baload
    //   60: getstatic i.e : B
    //   63: if_icmpne -> 75
    //   66: getstatic i.D : [B
    //   69: iload_0
    //   70: iconst_1
    //   71: bastore
    //   72: goto -> 81
    //   75: getstatic i.n : [I
    //   78: iload_0
    //   79: iconst_m1
    //   80: iastore
    //   81: iinc #0, 1
    //   84: goto -> 2
    //   87: iconst_0
    //   88: istore_0
    //   89: iload_0
    //   90: getstatic i.E : [B
    //   93: arraylength
    //   94: if_icmpge -> 174
    //   97: getstatic i.E : [B
    //   100: iload_0
    //   101: baload
    //   102: ifle -> 168
    //   105: getstatic i.E : [B
    //   108: iload_0
    //   109: dup2
    //   110: baload
    //   111: iconst_1
    //   112: isub
    //   113: i2b
    //   114: bastore
    //   115: getstatic i.E : [B
    //   118: iload_0
    //   119: baload
    //   120: ifne -> 168
    //   123: getstatic i.i : [B
    //   126: getstatic i.o : [I
    //   129: iload_0
    //   130: iaload
    //   131: baload
    //   132: getstatic i.d : B
    //   135: if_icmpne -> 162
    //   138: getstatic i.j : [B
    //   141: getstatic i.o : [I
    //   144: iload_0
    //   145: iaload
    //   146: baload
    //   147: getstatic i.e : B
    //   150: if_icmpne -> 162
    //   153: getstatic i.E : [B
    //   156: iload_0
    //   157: iconst_1
    //   158: bastore
    //   159: goto -> 168
    //   162: getstatic i.o : [I
    //   165: iload_0
    //   166: iconst_m1
    //   167: iastore
    //   168: iinc #0, 1
    //   171: goto -> 89
    //   174: return
  }
  
  static a(paramByte1, paramByte2) {
    let j;
    return d(j = a(paramByte1, paramByte2, 0, 7));
  }
  
  static a(paramByte1, paramByte2, paramBoolean1, paramBoolean2) {
    let j;
    return a(j = a(paramByte1, paramByte2, 0, 7), paramBoolean1, paramBoolean2);
  }
  
  static d(paramInt) {
    switch (paramInt) {
      case 0:
        return 10400556;
      case 1:
      case 2:
        return 6846740;
      case 3:
        return 11769900;
      case 4:
      case 5:
        return 6177292;
      case 6:
        return 8947848;
      case 7:
        return 7423;
    } 
    return 0;
  }
  
  static a(paramInt, paramBoolean1, paramBoolean2) {
    let bool;
    let b = 0;
    if (i === 5) {
      bool = true;
    } else if (i === 6) {
      bool = true;
    } else if (i === 7) {
      bool = true;
    } else if (i === 17) {
      bool = true;
    } else if (i === 18) {
      bool = true;
    } else if (i === 19) {
      bool = true;
    } else if (i > 7 && i < 17) {
      bool = true;
    } else {
      bool = false;
    } 
    if (!paramBoolean2)
      b = 1; 
    switch (paramInt) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return paramBoolean1 ? h.a[0 + b][bool] : h.a[2 + b][bool];
      case 7:
        return paramBoolean1 ? h.a[4 + b][bool] : h.a[6 + b][bool];
    } 
    return 0;
  }
  
  static a(paramByte1, paramByte2, paramInt1, paramInt2, paramGraphics) {
    let j = 0;
    if ((g[paramByte1 + paramByte2 * b] & true) !== 0) {
      j = a(paramByte1, paramByte2);
    } else {
      j = 0;
    } 
    let k = (j & 0xFF0000) >> 16;
    let m = (j & 0xFF00) >> 8;
    let n = j & 0xFF;
    paramGraphics.setColor(j);
    paramGraphics.fillRect((paramByte1 - paramInt1) * 9, (paramByte2 - paramInt2) * 9, 9, 9);
    if ((g[paramByte1 + paramByte2 * b] & true) !== 0) {
      paramGraphics.setColor(f(k += k >> 2), f(m += m >> 2), f(n += n >> 2));
      paramGraphics.drawLine((paramByte1 - paramInt1) * 9 + 1, (paramByte2 - paramInt2) * 9, (paramByte1 - paramInt1) * 9 + 9 - 1, (paramByte2 - paramInt2) * 9);
      paramGraphics.drawLine((paramByte1 - paramInt1) * 9 + 9 - 1, (paramByte2 - paramInt2) * 9, (paramByte1 - paramInt1) * 9 + 9 - 1, (paramByte2 - paramInt2) * 9 + 9 - 2);
      paramGraphics.setColor(f(k - (k >> 1)), f(m - (m >> 1)), f(n - (n >> 1)));
      paramGraphics.drawLine((paramByte1 - paramInt1) * 9, (paramByte2 - paramInt2) * 9 + 9 - 1, (paramByte1 - paramInt1) * 9 + 9 - 2, (paramByte2 - paramInt2) * 9 + 9 - 1);
      paramGraphics.drawLine((paramByte1 - paramInt1) * 9, (paramByte2 - paramInt2) * 9 + 1, (paramByte1 - paramInt1) * 9, (paramByte2 - paramInt2) * 9 + 9 - 2);
    } 
    let b;
    for (b = 0; b < x.length && x[b] !== -1; b++) {
      if (x[b] === paramByte1 + paramByte2 * b) {
        c.a((paramByte1 - paramInt1) * 9 + 4, (paramByte2 - paramInt2) * 9 + 4, 97, paramGraphics);
        if ((g[paramByte1 + paramByte2 * b] & 0x2) === 0)
          b((paramByte1 - paramInt1) * 9, (paramByte2 - paramInt2) * 9, 9, paramGraphics); 
        return;
      } 
    } 
    for (b = 0; b < y.length && y[b] !== -1; b++) {
      if (y[b] === paramByte1 + paramByte2 * b) {
        c.a((paramByte1 - paramInt1) * 9 + 4, (paramByte2 - paramInt2) * 9 + 4, 98, paramGraphics);
        if ((g[paramByte1 + paramByte2 * b] & 0x2) === 0)
          b((paramByte1 - paramInt1) * 9, (paramByte2 - paramInt2) * 9, 9, paramGraphics); 
        return;
      } 
    } 
    for (b = 0; b < A.length && A[b] !== -1; b++) {
      if (A[b] === paramByte1 + paramByte2 * b) {
        c.a((paramByte1 - paramInt1) * 9 + 4, (paramByte2 - paramInt2) * 9 + 4, 103, paramGraphics);
        if ((g[paramByte1 + paramByte2 * b] & 0x2) === 0)
          b((paramByte1 - paramInt1) * 9, (paramByte2 - paramInt2) * 9, 9, paramGraphics); 
        return;
      } 
    } 
    for (b = 0; b < z.length && z[b] !== -1; b++) {
      if (z[b] === paramByte1 + paramByte2 * b) {
        c.a((paramByte1 - paramInt1) * 9 + 4, (paramByte2 - paramInt2) * 9 + 4, 102, paramGraphics);
        if ((g[paramByte1 + paramByte2 * b] & 0x2) === 0)
          b((paramByte1 - paramInt1) * 9, (paramByte2 - paramInt2) * 9, 9, paramGraphics); 
        return;
      } 
    } 
    for (b = 0; b < B.length && B[b] !== -1; b++) {
      if (B[b] === paramByte1 + paramByte2 * b) {
        c.a((paramByte1 - paramInt1) * 9 + 4, (paramByte2 - paramInt2) * 9 + 4, 96, paramGraphics);
        return;
      } 
    } 
    if (P && e === 0 && s[S] === paramByte1 && t[S] === paramByte2) {
      c.a((paramByte1 - paramInt1) * 9 + 4, (paramByte2 - paramInt2) * 9 + 4, 99, paramGraphics);
      return;
    } 
    for (b = 0; b < C.length; b++) {
      if (C[b] !== -1 && C[b] === paramByte1 + paramByte2 * b) {
        c.a((paramByte1 - paramInt1) * 9 + 4, (paramByte2 - paramInt2) * 9 + 4, 100, paramGraphics);
        return;
      } 
    } 
  }
  
  static b(paramInt1, paramInt2, paramInt3, paramGraphics) {
    paramGraphics.setColor(14561842);
    paramGraphics.drawRect(paramInt1, paramInt2, paramInt3 - 1, paramInt3 - 1);
  }
  
  static f(paramGraphics) {
    let bool1 = false;
    let j = c.a(222, 2);
    paramGraphics.setColor(0);
    paramGraphics.drawLine(0, 169, 176, 169);
    let k = c.a(207, 2);
    let m = c.a(209, 2);
    let n = c.a(210, 2);
    let i1 = c.a(208, 2);
    let i2 = (176 - k - n - i1) / m + 1;
    c.a(0, 170, 207, paramGraphics);
    let i3;
    for (i3 = 0; i3 < i2; i3++)
      c.a(0 + k + i3 * m, 170, 209, paramGraphics); 
    c.a(176 - i1 - n, 170, 210, paramGraphics);
    c.a(176 - i1, 170, 208, paramGraphics);
    i3 = 0 + k;
    let i4;
    let i5 = (i4 = 176 - i1 - n) - i3;
    paramGraphics.setColor(9109761);
    if (t !== null)
      paramGraphics.setColor(14826299); 
    paramGraphics.fillRect(i3, 181, i5, 7);
    paramGraphics.setColor(5898754);
    paramGraphics.drawLine(i3, 181, i4 - 1, 181);
    paramGraphics.drawLine(i3, 187, i4 - 1, 187);
    let i6 = (C << 16) / 100 * i5 >> 16;
    let i7 = C;
    if (D > 0 && D < 600 && o === 0) {
      i7 = C + m * 1000 * D / 600 / 1000;
      paramGraphics.setColor(11283757);
      paramGraphics.drawRect(i3, 182, (i7 << 16) / 100 * (i4 - i3) >> 16, 4);
    } 
    if (i6 > 0) {
      paramGraphics.setColor(16711680);
      paramGraphics.fillRect(i3, 182, i6, 5);
      paramGraphics.setColor(11283757);
      paramGraphics.drawLine(i3, 182, i3 + i6 - 1, 182);
      paramGraphics.drawLine(i3, 186, i3 + i6 - 1, 186);
      if (i6 - 5 > 1) {
        paramGraphics.setColor(16747146);
        paramGraphics.drawLine(i3 + 1, 183, i3 + i6 - 2, 183);
      } 
    } 
    let i8 = i3 + (i4 - i3 >> 1) - (j << 1);
    let bool2 = false;
    c(i8, 191, i7, paramGraphics);
    c.a(i8 + 2 + j, 191, 232, paramGraphics);
    c(i8 + j * 4, 191, 100, paramGraphics);
    let b;
    for (b = (h % 2 === 0) ? 1 : 0; b < 8; b += 2)
      c.a(176 - i1 + i[b][0], 170 + i[b][1], 215, paramGraphics); 
    for (b = 0; b < 4; b++) {
      let i9 = (b << 1) + ((h % 2 === 0) ? 0 : 1);
      c.a(176 - i1 + i[i9][0], 170 + i[i9][1], b[l[h]][b], paramGraphics);
    } 
    if (o === p) {
      c.a(40, 189, 58, paramGraphics);
      if (!b()) {
        b(170, paramGraphics);
        return;
      } 
    } else {
      c.a(40, 189, h.b[A[o * 2]], paramGraphics);
      let i9 = -1;
      if (!b()) {
        b(170, paramGraphics);
      } else if (A[o * 2] === 25) {
        i9 = c(25);
      } else if (A[o * 2] === 8) {
        i9 = c(8);
      } else if (A[o * 2] === 1) {
        i9 = c(1);
      } else if (A[o * 2] === 22) {
        i9 = c(22);
      } else if (A[o * 2] === 2) {
        i9 = c(2);
      } 
      let i10 = 0 + k - 29;
      if (A[o * 2] !== 8 && A[o * 2] !== 1 && A[o * 2] !== 23 && A[o * 2] !== 16 && A[o * 2] !== 4 && A[o * 2] !== 25 && A[o * 2] !== 13 && A[o * 2] !== 10 && A[o * 2] !== 17 && A[o * 2] !== 15) {
        c(i10 + ((A[o * 2 + 1] < 10) ? j : 0), 193, A[o * 2 + 1], paramGraphics);
        i10 -= (A[o * 2 + 1] < 10) ? j : (j << 1);
      } 
      if (i9 > -1)
        for (let b1 = 0; b1 < i9; b1++) {
          paramGraphics.setColor(10066329);
          paramGraphics.fillRect(i10 - 4 * b1, 196, 3, 3);
          paramGraphics.setColor(0);
          paramGraphics.drawRect(i10 - 4 * b1, 196, 3, 3);
        }  
    } 
  }
  
  static b(paramInt, paramGraphics) {
    paramGraphics.setColor(0);
    paramGraphics.drawRect(21, paramInt + 9, 38, 18);
    paramGraphics.drawLine(21, paramInt + 39 - 12, 58, paramInt + 8);
    paramGraphics.drawLine(23, paramInt + 39 - 12, 60, paramInt + 8);
    paramGraphics.drawLine(21, paramInt + 8, 58, paramInt + 39 - 12);
    paramGraphics.drawLine(19, paramInt + 8, 57, paramInt + 39 - 12);
    paramGraphics.setColor(16711680);
    paramGraphics.drawRect(20, paramInt + 8, 40, 20);
    paramGraphics.drawLine(20, paramInt + 39 - 11, 59, paramInt + 8);
    paramGraphics.drawLine(20, paramInt + 8, 59, paramInt + 39 - 11);
  }
  
  static c(paramInt1, paramInt2, paramInt3, paramGraphics) {
    let j;
    let k = (j = c.a(222, 2)) * (String.valueOf(paramInt3).length() >> 1) - (j >> 1);
    if (paramInt3 === 0) {
      c.a(paramInt1 + k, paramInt2, 231, paramGraphics);
      return;
    } 
    while (paramInt3 !== 0) {
      let m;
      let bool = ((m = paramInt3 % 10) !== 0) ? (221 + m) : true;
      c.a(paramInt1 + k, paramInt2, bool, paramGraphics);
      paramInt3 /= 10;
      k -= j;
    } 
  }
  
  static g(paramGraphics) {
    let j = a(d, e, 0, 7);
    if (r !== -1 && (j === 0 || j === 3 || j === 7) && c === null && e === 0) {
      let k;
      if ((k = 1000 * (600 - r) * 255 / 600 / 1000) > 255)
        k = 255; 
      paramGraphics.setColor(k, k, k);
      paramGraphics.fillRect((p >> 8) + 0, (q >> 8) + 0, 1, 1);
    } 
  }
  
  static h(paramGraphics) {
    let j;
    let k = 176 / b;
    let m = 208 / c;
    if (k < m) {
      j = k;
    } else {
      j = m;
    } 
    if (--j <= 0)
      j = 1; 
    let n = j * b;
    let i1 = j * c;
    let i2 = 176 - n >> 1;
    let i3 = 208 - i1 - 15 >> 1;
    let b = 0;
    let i4;
    for (i4 = 0; i4 < w.length; i4++)
      w[i4] = -1; 
    for (i4 = 0; i4 < b; i4 = (i4 + 1)) {
      let b2;
      for (b2 = 0; b2 < c; b2 = (b2 + 1)) {
        let bool;
        if ((g[i4 + b2 * b] & true) !== 0) {
          bool = a(i4, b2);
        } else {
          bool = false;
        } 
        paramGraphics.setColor(bool);
        paramGraphics.fillRect(i4 * j + i2, b2 * j + i3, j, j);
      } 
    } 
    let b1;
    for (b1 = 0; b1 < x.length && x[b1] !== -1; b1++) {
      let i8 = x[b1] / b;
      c.a((i4 = x[b1] % b) * j + i2 + (j >> 1), i8 * j + i3 + (j >> 1), 97, paramGraphics);
      if ((g[i4 + i8 * b] & 0x2) === 0)
        b(i4 * j + i2 + (j >> 1) - 4, i8 * j + i3 + (j >> 1) - 4, 9, paramGraphics); 
    } 
    for (b1 = 0; b1 < y.length && y[b1] !== -1; b1++) {
      let i8 = y[b1] / b;
      c.a((i4 = y[b1] % b) * j + i2 + (j >> 1), i8 * j + i3 + (j >> 1), 98, paramGraphics);
      if ((g[i4 + i8 * b] & 0x2) === 0)
        b(i4 * j + i2 + (j >> 1) - 4, i8 * j + i3 + (j >> 1) - 4, 9, paramGraphics); 
    } 
    for (b1 = 0; b1 < A.length && A[b1] !== -1; b1++) {
      let i8 = A[b1] / b;
      c.a((i4 = A[b1] % b) * j + i2 + (j >> 1), i8 * j + i3 + (j >> 1), 103, paramGraphics);
      if ((g[i4 + i8 * b] & 0x2) === 0)
        b(i4 * j + i2 + (j >> 1) - 4, i8 * j + i3 + (j >> 1) - 4, 9, paramGraphics); 
      w[b] = (i4 + i8 * b);
      b = (b + 1);
    } 
    for (b1 = 0; b1 < z.length && z[b1] !== -1; b1++) {
      let i8 = z[b1] / b;
      c.a((i4 = z[b1] % b) * j + i2 + (j >> 1), i8 * j + i3 + (j >> 1), 102, paramGraphics);
      if ((g[i4 + i8 * b] & 0x2) === 0)
        b(i4 * j + i2 + (j >> 1) - 4, i8 * j + i3 + (j >> 1) - 4, 9, paramGraphics); 
      w[b] = (i4 + i8 * b);
      b = (b + 1);
    } 
    for (b1 = 0; b1 < B.length && B[b1] !== -1; b1++) {
      let i8 = B[b1] / b;
      c.a((i4 = B[b1] % b) * j + i2 + (j >> 1), i8 * j + i3 + (j >> 1), 96, paramGraphics);
    } 
    if (P && e === 0) {
      i4 = s[S];
      let i8 = t[S];
      c.a(i4 * j + i2 + (j >> 1), i8 * j + i3 + (j >> 1), 99, paramGraphics);
      w[b] = (i4 + i8 * b);
    } 
    let i5;
    for (i5 = 0; i5 < C.length; i5++) {
      b1 = 1;
      if (C[i5] !== -1) {
        let i8 = C[i5] / b;
        i4 = C[i5] % b;
        for (let b2 = 0; b2 < w.length; b2++) {
          if (w[b2] === i4 + i8 * b) {
            b1 = 0;
            break;
          } 
        } 
        if (b1 !== 0)
          c.a(i4 * j + i2 + (j >> 1), i8 * j + i3 + (j >> 1), 100, paramGraphics); 
      } 
    } 
    c.a(d * j + i2 + (j >> 1), e * j + i3 + (j >> 1), g[h], paramGraphics);
    if (j === 1) {
      n += 30;
      i2 -= 15;
    } 
    i5 = c.a(231, 3) >> 2;
    paramGraphics.setColor(0);
    paramGraphics.fillRect(i2, i3 + i1, n, 15);
    paramGraphics.setColor(16777215);
    paramGraphics.drawLine(i2, i3 + i1 + 1, i2 + n, i3 + i1 + 1);
    paramGraphics.setColor(10066329);
    paramGraphics.drawLine(i2, i3 + i1 + 2, i2 + n, i3 + i1 + 2);
    let i6 = i3 + i1 + 7 - i5;
    c.a(i2 + 7, i6 + 2, 85, paramGraphics);
    if (C === 0 && I === 0 && m === -1 && h.a !== null)
      c.a(i2 + n - 7, i6 + 2, 87, paramGraphics); 
    let i7;
    c(i7 = i2 + 15, i6, i, paramGraphics);
    c.a(i7 += (i > 9) ? 6 : 3, i6, 234, paramGraphics);
    i7 += 2;
    c.a(i7, i6, 231, paramGraphics);
    i7 += 4;
    c.a(i7, i6, 231, paramGraphics);
    if (C === 0 && I === 0 && m === -1 && h.a !== null)
      c(i2 + n - 20, i6, 30 - A, paramGraphics); 
    if (j !== 1)
      a(i2, i3, n, i1 + 15, paramGraphics); 
  }
  
  static u() {
    for (let b = -1; b < 2; b++) {
      for (let b1 = -1; b1 < 2; b1++) {
        if (d + b >= 0 && d + b < b && e + b1 >= 0 && e + b1 < c && (g[d + b + (e + b1) * b] & true) === 0)
          g[d + b + (e + b1) * b] = (g[d + b + (e + b1) * b] + 1); 
      } 
    } 
  }
  
  a(paramGraphics) {
    if (u !== 0) {
      paramGraphics.setColor(0);
      paramGraphics.fillRect(0, 0, 176, 208);
    } else if (G !== null && E === 0 && (w === true || w === 2)) {
      paramGraphics.setColor(0);
      paramGraphics.fillRect(0, 0, 176, 208);
    } else {
      paramGraphics.drawImage(b, 0, 0, 20);
      for (let b = 0; b < a; b++) {
        if (d[b] !== 0) {
          let k;
          let j = ((a + (b * 150)) / 175 % o.length);
          if (e[b] !== 0) {
            k = o[j];
          } else {
            k = p[j];
          } 
          c.a(u[b], v[b], k, paramGraphics);
        } 
      } 
      h.a(paramGraphics);
      g(paramGraphics);
      l(paramGraphics);
      if (!h && i === null)
        paramGraphics.drawImage(a, 123, 8, 20); 
      if (!h && i === null)
        a(123, 8, 45, 45, paramGraphics); 
      i(paramGraphics);
      j(paramGraphics);
      k(paramGraphics);
      f(paramGraphics);
      if (v !== null) {
        let b1;
        if ((b1 = (a / 500 % 2)) === 1)
          c.a(0, 0, 86, paramGraphics); 
      } else if (v !== null) {
        c.a(4, 8, 72, paramGraphics);
      } 
      m(paramGraphics);
      if (h || i !== null) {
        paramGraphics.setColor(0);
        let b1;
        for (b1 = 0; b1 < '; b1 += 2)
          paramGraphics.drawLine(0, b1, b1, 0); 
        for (b1 = 0; b1 < '; b1 += 2)
          paramGraphics.drawLine(b1, 208, 176, 32 + b1); 
        if (h)
          h(paramGraphics); 
      } 
      n(paramGraphics);
    } 
    c.a(2, p.c - 2 - c.a(1, 3), 1, paramGraphics);
  }
  
  static i(paramGraphics) {
    R = true;
    let j = 0;
    if (g) {
      let b1 = -1;
      for (let b2 = -1; b2 < 2; b2++) {
        for (let b = -1; b < 2; b++) {
          b1 = (b1 + 1);
          if (C[b1] !== -1)
            for (let b3 = 0; b3 < (h.a[0]).length; b3 += 2) {
              if (h.a[h][b3] === b2 && h.a[h][b3 + 1] === b) {
                let k = 0 + H + 7 + 10;
                if (h === a[b + 1][b2 + 1]) {
                  a(88 - (w >> 1), k - (x >> 1), w, x, false, 0, paramGraphics);
                  j = e(C[b1]);
                  c.a(88, k, j, paramGraphics);
                  R = b1;
                  break;
                } 
                if ((h < a[b + 1][b2 + 1] || (h === 7 && a[b + 1][b2 + 1] === null)) && (h || a[b + 1][b2 + 1] !== 7)) {
                  a(146 - (w >> 1), k - (x >> 1), w, x, false, 0, paramGraphics);
                  j = e(C[b1]);
                  c.a(146, k, j, paramGraphics);
                  break;
                } 
                a(29 - (w >> 1), k - (x >> 1), w, x, false, 0, paramGraphics);
                j = e(C[b1]);
                c.a(29, k, j, paramGraphics);
                break;
              } 
            }  
        } 
      } 
    } 
  }
  
  static e(paramInt) {
    switch (paramInt) {
      case 101:
        return 72;
      case 104:
        return 84;
      case 100:
        return 73;
    } 
    return -1;
  }
  
  static j(paramGraphics) {
    let j = 0;
    if (l !== null && (B !== 4 || a()) && B !== -1) {
      let k = H + 7 + 20 + 33;
      j = k + l;
      let m = 88 - ((j - 1) * (u + y) >> 1);
      for (let b = 0; b < j; b++) {
        let i2;
        let n = m - (u >> 1) + b * (u + y);
        let i1 = k - (v >> 1);
        if (b < k) {
          i2 = h[B] - p[b];
        } else {
          i2 = h[8] - q[b - k];
        } 
        if (i2 > 0 || (c[b] !== null && D > 0 && D > 600))
          if (j) {
            a(n, i1, u, v, true, 11468800, paramGraphics);
          } else {
            a(n, i1, u, v, false, 0, paramGraphics);
          }  
        if (b < k) {
          if (i2 > 0 || (c[b] !== null && D > 0 && D > 600)) {
            c.a(m + b * (u + y), k, h.e[B], paramGraphics);
            let i3 = i2 * 4 + (i2 - 1) * 2 >> 1;
            let b1 = 0;
            if (p.c <= 128)
              b1 = -11; 
            for (let b2 = 0; b2 < i2; b2++) {
              paramGraphics.setColor(13959168);
              paramGraphics.fillRect(m + b * (u + y) - i3 + b2 * 6, k + v / 2 + 2 + b1, 4, 4);
              paramGraphics.setColor(0);
              paramGraphics.drawRect(m + b * (u + y) - i3 + b2 * 6, k + v / 2 + 2 + b1, 4, 4);
            } 
          } 
          if (c[b] !== null && D > 0 && D < 600)
            for (let b1 = 0; b1 < 10; b1++) {
              s[b1] = 0;
              t[b1] = 0;
            }  
        } else {
          if (i2 > 0 || (c[b] !== null && D > 0 && D > 600)) {
            c.a(m + b * (u + y), k, h.e[8], paramGraphics);
            paramGraphics.setColor(13959168);
            let i3 = i2 * 4 + (i2 - 1) * 2 >> 1;
            let b1 = 0;
            if (p.c <= 128)
              b1 = -11; 
            for (let b2 = 0; b2 < i2; b2++) {
              paramGraphics.setColor(13959168);
              paramGraphics.fillRect(m + b * (u + y) - i3 + b2 * 6, k + v / 2 + 2 + b1, 4, 4);
              paramGraphics.setColor(0);
              paramGraphics.drawRect(m + b * (u + y) - i3 + b2 * 6, k + v / 2 + 2 + b1, 4, 4);
            } 
          } 
          if (c[b] !== null && D > 0 && D < 600)
            for (let b1 = 0; b1 < 10; b1++) {
              s[b1] = 0;
              t[b1] = 0;
            }  
        } 
      } 
    } 
  }
  
  static a(paramInt1, paramInt2, paramInt3, paramInt4, paramBoolean, paramInt5, paramGraphics) {
    paramGraphics.setColor(0);
    paramGraphics.fillRect(paramInt1, paramInt2, paramInt3, paramInt4);
    paramGraphics.setColor(9408399);
    paramGraphics.drawRect(paramInt1 + 1, paramInt2 + 1, paramInt3 - 3, paramInt4 - 3);
    paramGraphics.setColor(4605510);
    paramGraphics.drawRect(paramInt1 + 3, paramInt2 + 3, paramInt3 - 7, paramInt4 - 7);
    if (paramBoolean) {
      paramGraphics.setColor(paramInt5);
      paramGraphics.drawRect(paramInt1 + 1, paramInt2 + 1, paramInt3 - 3, paramInt4 - 3);
    } 
  }
  
  static k(paramGraphics) {
    if (m && l === null) {
      let j = 0 + H + 7 + 20 + 33;
      let k = 88 - ((n - 1) * (u + y) >> 1);
      for (let b = 0; b < n; b++) {
        let b1;
        if ((b1 = u[B[b]]) !== 2) {
          let m = k - (u >> 1) + b * (u + y);
          let n = j - (v >> 1);
          if (e === 0 && r[B[b]] !== 5) {
            a(m, n, u, v, false, 0, paramGraphics);
            c.a(k + b * (u + y), j, h.d[r[B[b]]], paramGraphics);
            let i1 = -1;
            switch (r[B[b]]) {
              case 1:
                if (b1 === 1) {
                  let i2 = (a /  130 % n.length);
                  let bool = n[i2];
                  break;
                } 
                if (b1 === 0) {
                  let i2 = (a /  250 % r.length);
                  i1 = r[i2];
                } 
                break;
              case 3:
                if (b1 === 1) {
                  let i2 = (a /  250 % n.length);
                  i1 = q[i2];
                } 
                break;
            } 
            if (i1 !== -1)
              c.a(k + b * (u + y), j, i1, paramGraphics); 
          } 
        } 
      } 
    } 
  }
  
  static t(paramInt) {
    for (let b = 0; b < k.length; b++) {
      if (k[b] === paramInt)
        return; 
    } 
    for (arrayOfByte = G; arrayOfByte >= null; arrayOfByte--)
      k[arrayOfByte + 1] = k[arrayOfByte]; 
    k[0] = paramInt;
    G++;
    v = true;
  }
  
  static u(paramInt) {
    let b1 = 0;
    for (let b2 = 0; b2 < paramInt; b2++) {
      b1 = 0;
      for (let b = 0; b < e.length; b += 2) {
        e[b + 1] = (e[b + 1] - 26);
        if (f[b >> 1] === 0 && e[b + 1] < 26 && e[b + 1] > 0) {
          b1++;
        } else if (e[b + 1] <= 0) {
          e[b] = a(-127, 127, a);
          e[b + 1] = a(101, 127, a);
          if (Q) {
            f[b >> 1] = 0;
          } else {
            f[b >> 1] = 1;
          } 
        } 
      } 
      if (Q) {
        Q--;
        if (Q)
          P = a(5, 100, a); 
      } else if (P) {
        P--;
        if (P)
          Q = a(5, 20, a); 
      } 
    } 
    if (b1 > 0) {
      if (A !== 1) {
        B = a(0, 7, a);
        A = 2;
        return;
      } 
    } else if (A !== 0) {
      A = 3;
    } 
  }
 (paramArrayOfbyte, paramInt1, paramInt2) {
    paramArrayOfbyte[paramInt1++] = (paramInt2 >> 24 & 0xFF);
    paramArrayOfbyte[paramInt1++] = (paramInt2 >> 16 & 0xFF);
    paramArrayOfbyte[paramInt1++] = (paramInt2 >> 8 & 0xFF);
    paramArrayOfbyte[paramInt1++] = (paramInt2 & 0xFF);
    return paramInt1;
  }
 (paramByte) {
    return paramByte & 0xFF;
  }
  
  a(paramArrayOfbyte) {
    return a(paramArrayOfbyte[O++]) << 24 | a(paramArrayOfbyte[O++]) << 16 | a(paramArrayOfbyte[O++]) << 8 | a(paramArrayOfbyte[O++]);
  }
 (paramArrayOfbyte) {
    return (a(paramArrayOfbyte[O++]) << 8 | a(paramArrayOfbyte[O++]));
  }
  
  a(paramArrayOfbyte) {
    let b;
    return ((b = paramArrayOfbyte[O++]) === 1);
  }
  
  b(paramArrayOfbyte, paramInt1, paramInt2) {
    paramArrayOfbyte[paramInt1++] = (paramInt2 >> 8 & 0xFF);
    paramArrayOfbyte[paramInt1++] = (paramInt2 & 0xFF);
    return paramInt1;
  }
  
  v() {
    if (C !== 0) {
      g = true;
    } else {
      g = true;
    } 
    if (h.a === null) {
      h = true;
    } else if (h.a === true) {
      h = true;
    } else if (h.a === 2) {
      h = true;
    } 
    let b = 12;
    let b1;
    for (b1 = 0; b1 < h.length; b1++) {
      if (h[b1] === 4 && a[b1] === true)
        b = (b - m[b1]); 
    } 
    if (b === 12) {
      j = true;
    } else {
      j = b * 50;
    } 
    i = false;
    for (b1 = 0; b1 < g.length; b1++) {
      if ((g[b1] & 0x2) !== 0)
        i += 50; 
      if ((g[b1] & true) !== 0)
        i++; 
    } 
    f = (40 - A) * 100;
    if (f < 0)
      f = 0; 
    e = h + g + j + i + f;
  }
  
  a(paramArrayOfbyte, paramInt, paramBoolean) {
    if (paramBoolean) {
      paramArrayOfbyte[paramInt++] = 1;
    } else {
      paramArrayOfbyte[paramInt++] = 0;
    } 
    return paramInt;
  }
  
  w() {
    N = z;
    h.b = 1;
    let j = 0;
 ;
    j = a(arrayOfByte = new byte[2600], 0, v);
    arrayOfByte[j++] = v;
    arrayOfByte[j++] = h.a;
    j = a(arrayOfByte, j, h.e);
    j = a(arrayOfByte, j, k);
    j = a(arrayOfByte, j, a);
    j = a(arrayOfByte, j, b);
    let b;
    for (b = 0; b < n.length; b++)
      j = a(arrayOfByte, j, n[b]); 
    for (b = 0; b < D.length; b++)
      arrayOfByte[j++] = D[b]; 
    for (b = 0; b < o.length; b++)
      j = a(arrayOfByte, j, o[b]); 
    for (b = 0; b < E.length; b++)
      arrayOfByte[j++] = E[b]; 
    j = a(arrayOfByte, j, A);
    j = a(arrayOfByte, j, B);
    j = a(arrayOfByte, j, C);
    j = a(arrayOfByte, j, D);
    j = a(arrayOfByte, j, E);
    j = a(arrayOfByte, j, S);
    for (b = 0; b < x.length; b++)
      j = b(arrayOfByte, j, x[b]); 
    for (b = 0; b < y.length; b++)
      j = b(arrayOfByte, j, y[b]); 
    for (b = 0; b < z.length; b++)
      j = b(arrayOfByte, j, z[b]); 
    for (b = 0; b < A.length; b++)
      j = b(arrayOfByte, j, A[b]); 
    for (b = 0; b < B.length; b++)
      j = b(arrayOfByte, j, B[b]); 
    for (b = 0; b < C.length; b++)
      j = b(arrayOfByte, j, C[b]); 
    j = a(arrayOfByte, j, l);
    for (b = 0; b < F.length; b++)
      arrayOfByte[j++] = F[b]; 
    j = a(arrayOfByte, j, H);
    arrayOfByte[j++] = x;
    j = a(arrayOfByte, j, I);
    arrayOfByte[j++] = y;
    arrayOfByte[j++] = z;
    j = a(arrayOfByte, j, J);
    j = a(arrayOfByte, j, K);
    j = a(arrayOfByte, j, L);
    j = a(arrayOfByte, j, M);
    j = a(arrayOfByte, j, N);
    j = a(arrayOfByte, j, O);
    j = a(arrayOfByte, j, P);
    j = a(arrayOfByte, j, Q);
    j = a(arrayOfByte, j, R);
    j = a(arrayOfByte, j, S);
    j = a(arrayOfByte, j, T);
    j = a(arrayOfByte, j, U);
    j = a(arrayOfByte, j, V);
    j = a(arrayOfByte, j, W);
    j = a(arrayOfByte, j, X);
    j = a(arrayOfByte, j, Y);
    j = a(arrayOfByte, j, Z);
    j = a(arrayOfByte, j, aa);
    j = a(arrayOfByte, j, ab);
    j = a(arrayOfByte, j, ac);
    j = a(arrayOfByte, j, ad);
    j = a(arrayOfByte, j, ae);
    j = a(arrayOfByte, j, af);
    j = a(arrayOfByte, j, ag);
    j = a(arrayOfByte, j, ah);
    j = a(arrayOfByte, j, ai);
    j = a(arrayOfByte, j, aj);
    j = a(arrayOfByte, j, ak);
    j = a(arrayOfByte, j, al);
    j = a(arrayOfByte, j, am);
    j = a(arrayOfByte, j, c);
    j = a(arrayOfByte, j, d);
    j = a(arrayOfByte, j, e);
    j = a(arrayOfByte, j, U);
    j = a(arrayOfByte, j, m);
    j = a(arrayOfByte, j, f);
    for (b = 0; b < g.length; b++)
      arrayOfByte[j++] = g[b]; 
    arrayOfByte[j++] = d;
    arrayOfByte[j++] = e;
    arrayOfByte[j++] = f;
    arrayOfByte[j++] = g;
    arrayOfByte[j++] = h;
    j = a(arrayOfByte, j, z);
    j = a(arrayOfByte, j, A);
    arrayOfByte[j++] = i;
    for (b = 0; b < h.length; b++)
      arrayOfByte[j++] = h[b]; 
    for (b = 0; b < h.length; b++)
      arrayOfByte[j++] = i[b]; 
    for (b = 0; b < h.length; b++)
      arrayOfByte[j++] = j[b]; 
    for (b = 0; b < h.length; b++)
      arrayOfByte[j++] = k[b]; 
    for (b = 0; b < h.length; b++)
      arrayOfByte[j++] = l[b]; 
    for (b = 0; b < h.length; b++)
      arrayOfByte[j++] = m[b]; 
    for (b = 0; b < h.length; b++)
      arrayOfByte[j++] = n[b]; 
    for (b = 0; b < h.length; b++)
      arrayOfByte[j++] = o[b]; 
    for (b = 0; b < h.length; b++)
      j = a(arrayOfByte, j, a[b]); 
    for (b = 0; b < r.length; b++)
      arrayOfByte[j++] = r[b]; 
    for (b = 0; b < r.length; b++)
      arrayOfByte[j++] = s[b]; 
    for (b = 0; b < r.length; b++)
      arrayOfByte[j++] = t[b]; 
    for (b = 0; b < r.length; b++)
      arrayOfByte[j++] = u[b]; 
    for (b = 0; b < r.length; b++)
      arrayOfByte[j++] = v[b]; 
    for (b = 0; b < w.length; b++)
      arrayOfByte[j++] = w[b]; 
    for (b = 0; b < w.length; b++)
      arrayOfByte[j++] = x[b]; 
    for (b = 0; b < w.length; b++)
      arrayOfByte[j++] = y[b]; 
    for (b = 0; b < w.length; b++)
      arrayOfByte[j++] = z[b]; 
    for (b = 0; b < A.length; b++)
      arrayOfByte[j++] = A[b]; 
    j = a(arrayOfByte, j, C);
    j = a(arrayOfByte, j, k);
    arrayOfByte[j++] = o;
    arrayOfByte[j++] = p;
    j = a(arrayOfByte, j, q);
    j = a(arrayOfByte, j, G);
    for (b = 0; b < k.length; b++)
      j = a(arrayOfByte, j, k[b]); 
    arrayOfByte[j++] = s;
    arrayOfByte[j++] = t;
    arrayOfByte[j++] = u;
    a(arrayOfByte, j, s);
    try {
      m.a(arrayOfByte, "w");
      return;
    } catch (Exception exception) {
      return;
    } 
  }
  
  b() {
    // Byte code:
    //   0: iconst_0
    //   1: putstatic i.O : I
    //   4: ldc_w 'w'
    //   7: invokestatic a : (Ljava/lang/String;)[B
    //   10: dup
    //   11: astore_0
    //   12: invokestatic a : ([B)Z
    //   15: putstatic i.v : Z
    //   18: aload_0
    //   19: getstatic i.O : I
    //   22: dup
    //   23: iconst_1
    //   24: iadd
    //   25: putstatic i.O : I
    //   28: baload
    //   29: putstatic i.v : B
    //   32: aload_0
    //   33: getstatic i.O : I
    //   36: dup
    //   37: iconst_1
    //   38: iadd
    //   39: putstatic i.O : I
    //   42: baload
    //   43: putstatic h.a : B
    //   46: aload_0
    //   47: invokestatic a : ([B)Z
    //   50: putstatic h.e : Z
    //   53: aload_0
    //   54: invokestatic a : ([B)I
    //   57: putstatic i.k : I
    //   60: aload_0
    //   61: invokestatic a : ([B)Z
    //   64: putstatic i.a : Z
    //   67: aload_0
    //   68: invokestatic a : ([B)Z
    //   71: putstatic i.b : Z
    //   74: iconst_0
    //   75: istore_1
    //   76: iload_1
    //   77: getstatic i.n : [I
    //   80: arraylength
    //   81: if_icmpge -> 99
    //   84: getstatic i.n : [I
    //   87: iload_1
    //   88: aload_0
    //   89: invokestatic a : ([B)I
    //   92: iastore
    //   93: iinc #1, 1
    //   96: goto -> 76
    //   99: iconst_0
    //   100: istore_1
    //   101: iload_1
    //   102: getstatic i.D : [B
    //   105: arraylength
    //   106: if_icmpge -> 131
    //   109: getstatic i.D : [B
    //   112: iload_1
    //   113: aload_0
    //   114: getstatic i.O : I
    //   117: dup
    //   118: iconst_1
    //   119: iadd
    //   120: putstatic i.O : I
    //   123: baload
    //   124: bastore
    //   125: iinc #1, 1
    //   128: goto -> 101
    //   131: iconst_0
    //   132: istore_1
    //   133: iload_1
    //   134: getstatic i.o : [I
    //   137: arraylength
    //   138: if_icmpge -> 156
    //   141: getstatic i.o : [I
    //   144: iload_1
    //   145: aload_0
    //   146: invokestatic a : ([B)I
    //   149: iastore
    //   150: iinc #1, 1
    //   153: goto -> 133
    //   156: iconst_0
    //   157: istore_1
    //   158: iload_1
    //   159: getstatic i.E : [B
    //   162: arraylength
    //   163: if_icmpge -> 188
    //   166: getstatic i.E : [B
    //   169: iload_1
    //   170: aload_0
    //   171: getstatic i.O : I
    //   174: dup
    //   175: iconst_1
    //   176: iadd
    //   177: putstatic i.O : I
    //   180: baload
    //   181: bastore
    //   182: iinc #1, 1
    //   185: goto -> 158
    //   188: aload_0
    //   189: invokestatic a : ([B)Z
    //   192: putstatic i.A : Z
    //   195: aload_0
    //   196: invokestatic a : ([B)Z
    //   199: putstatic i.B : Z
    //   202: aload_0
    //   203: invokestatic a : ([B)Z
    //   206: putstatic i.C : Z
    //   209: aload_0
    //   210: invokestatic a : ([B)Z
    //   213: putstatic i.D : Z
    //   216: aload_0
    //   217: invokestatic a : ([B)Z
    //   220: putstatic i.E : Z
    //   223: aload_0
    //   224: invokestatic a : ([B)I
    //   227: putstatic i.S : I
    //   230: iconst_0
    //   231: istore_1
    //   232: iload_1
    //   233: getstatic i.x : [S
    //   236: arraylength
    //   237: if_icmpge -> 255
    //   240: getstatic i.x : [S
    //   243: iload_1
    //   244: aload_0
    //   245: invokestatic a : ([B)S
    //   248: sastore
    //   249: iinc #1, 1
    //   252: goto -> 232
    //   255: iconst_0
    //   256: istore_1
    //   257: iload_1
    //   258: getstatic i.y : [S
    //   261: arraylength
    //   262: if_icmpge -> 280
    //   265: getstatic i.y : [S
    //   268: iload_1
    //   269: aload_0
    //   270: invokestatic a : ([B)S
    //   273: sastore
    //   274: iinc #1, 1
    //   277: goto -> 257
    //   280: iconst_0
    //   281: istore_1
    //   282: iload_1
    //   283: getstatic i.z : [S
    //   286: arraylength
    //   287: if_icmpge -> 305
    //   290: getstatic i.z : [S
    //   293: iload_1
    //   294: aload_0
    //   295: invokestatic a : ([B)S
    //   298: sastore
    //   299: iinc #1, 1
    //   302: goto -> 282
    //   305: iconst_0
    //   306: istore_1
    //   307: iload_1
    //   308: getstatic i.A : [S
    //   311: arraylength
    //   312: if_icmpge -> 330
    //   315: getstatic i.A : [S
    //   318: iload_1
    //   319: aload_0
    //   320: invokestatic a : ([B)S
    //   323: sastore
    //   324: iinc #1, 1
    //   327: goto -> 307
    //   330: iconst_0
    //   331: istore_1
    //   332: iload_1
    //   333: getstatic i.B : [S
    //   336: arraylength
    //   337: if_icmpge -> 355
    //   340: getstatic i.B : [S
    //   343: iload_1
    //   344: aload_0
    //   345: invokestatic a : ([B)S
    //   348: sastore
    //   349: iinc #1, 1
    //   352: goto -> 332
    //   355: iconst_0
    //   356: istore_1
    //   357: iload_1
    //   358: getstatic i.C : [S
    //   361: arraylength
    //   362: if_icmpge -> 380
    //   365: getstatic i.C : [S
    //   368: iload_1
    //   369: aload_0
    //   370: invokestatic a : ([B)S
    //   373: sastore
    //   374: iinc #1, 1
    //   377: goto -> 357
    //   380: aload_0
    //   381: invokestatic a : ([B)I
    //   384: putstatic i.l : I
    //   387: iconst_0
    //   388: istore_1
    //   389: iload_1
    //   390: getstatic i.F : [B
    //   393: arraylength
    //   394: if_icmpge -> 419
    //   397: getstatic i.F : [B
    //   400: iload_1
    //   401: aload_0
    //   402: getstatic i.O : I
    //   405: dup
    //   406: iconst_1
    //   407: iadd
    //   408: putstatic i.O : I
    //   411: baload
    //   412: bastore
    //   413: iinc #1, 1
    //   416: goto -> 389
    //   419: aload_0
    //   420: invokestatic a : ([B)Z
    //   423: putstatic i.H : Z
    //   426: aload_0
    //   427: getstatic i.O : I
    //   430: dup
    //   431: iconst_1
    //   432: iadd
    //   433: putstatic i.O : I
    //   436: baload
    //   437: putstatic i.x : B
    //   440: aload_0
    //   441: invokestatic a : ([B)Z
    //   444: putstatic i.I : Z
    //   447: aload_0
    //   448: getstatic i.O : I
    //   451: dup
    //   452: iconst_1
    //   453: iadd
    //   454: putstatic i.O : I
    //   457: baload
    //   458: putstatic i.y : B
    //   461: aload_0
    //   462: getstatic i.O : I
    //   465: dup
    //   466: iconst_1
    //   467: iadd
    //   468: putstatic i.O : I
    //   471: baload
    //   472: putstatic i.z : B
    //   475: aload_0
    //   476: invokestatic a : ([B)Z
    //   479: putstatic i.J : Z
    //   482: aload_0
    //   483: invokestatic a : ([B)Z
    //   486: putstatic i.K : Z
    //   489: aload_0
    //   490: invokestatic a : ([B)Z
    //   493: putstatic i.L : Z
    //   496: aload_0
    //   497: invokestatic a : ([B)Z
    //   500: putstatic i.M : Z
    //   503: aload_0
    //   504: invokestatic a : ([B)Z
    //   507: putstatic i.N : Z
    //   510: aload_0
    //   511: invokestatic a : ([B)Z
    //   514: putstatic i.O : Z
    //   517: aload_0
    //   518: invokestatic a : ([B)Z
    //   521: putstatic i.P : Z
    //   524: aload_0
    //   525: invokestatic a : ([B)Z
    //   528: putstatic i.Q : Z
    //   531: aload_0
    //   532: invokestatic a : ([B)Z
    //   535: putstatic i.R : Z
    //   538: aload_0
    //   539: invokestatic a : ([B)Z
    //   542: putstatic i.S : Z
    //   545: aload_0
    //   546: invokestatic a : ([B)Z
    //   549: putstatic i.T : Z
    //   552: aload_0
    //   553: invokestatic a : ([B)Z
    //   556: putstatic i.U : Z
    //   559: aload_0
    //   560: invokestatic a : ([B)Z
    //   563: putstatic i.V : Z
    //   566: aload_0
    //   567: invokestatic a : ([B)Z
    //   570: putstatic i.W : Z
    //   573: aload_0
    //   574: invokestatic a : ([B)Z
    //   577: putstatic i.X : Z
    //   580: aload_0
    //   581: invokestatic a : ([B)Z
    //   584: putstatic i.Y : Z
    //   587: aload_0
    //   588: invokestatic a : ([B)Z
    //   591: putstatic i.Z : Z
    //   594: aload_0
    //   595: invokestatic a : ([B)Z
    //   598: putstatic i.aa : Z
    //   601: aload_0
    //   602: invokestatic a : ([B)Z
    //   605: putstatic i.ab : Z
    //   608: aload_0
    //   609: invokestatic a : ([B)Z
    //   612: putstatic i.ac : Z
    //   615: aload_0
    //   616: invokestatic a : ([B)Z
    //   619: putstatic i.ad : Z
    //   622: aload_0
    //   623: invokestatic a : ([B)Z
    //   626: putstatic i.ae : Z
    //   629: aload_0
    //   630: invokestatic a : ([B)Z
    //   633: putstatic i.af : Z
    //   636: aload_0
    //   637: invokestatic a : ([B)Z
    //   640: putstatic i.ag : Z
    //   643: aload_0
    //   644: invokestatic a : ([B)Z
    //   647: putstatic i.ah : Z
    //   650: aload_0
    //   651: invokestatic a : ([B)Z
    //   654: putstatic i.ai : Z
    //   657: aload_0
    //   658: invokestatic a : ([B)Z
    //   661: putstatic i.aj : Z
    //   664: aload_0
    //   665: invokestatic a : ([B)Z
    //   668: putstatic i.ak : Z
    //   671: aload_0
    //   672: invokestatic a : ([B)Z
    //   675: putstatic i.al : Z
    //   678: aload_0
    //   679: invokestatic a : ([B)Z
    //   682: putstatic i.am : Z
    //   685: aload_0
    //   686: invokestatic a : ([B)Z
    //   689: putstatic i.c : Z
    //   692: aload_0
    //   693: invokestatic a : ([B)Z
    //   696: putstatic i.d : Z
    //   699: aload_0
    //   700: invokestatic a : ([B)Z
    //   703: putstatic i.e : Z
    //   706: aload_0
    //   707: invokestatic a : ([B)I
    //   710: putstatic i.U : I
    //   713: aload_0
    //   714: invokestatic a : ([B)I
    //   717: putstatic i.m : I
    //   720: aload_0
    //   721: invokestatic a : ([B)Z
    //   724: putstatic i.f : Z
    //   727: iconst_0
    //   728: istore_1
    //   729: iload_1
    //   730: getstatic i.g : [B
    //   733: arraylength
    //   734: if_icmpge -> 759
    //   737: getstatic i.g : [B
    //   740: iload_1
    //   741: aload_0
    //   742: getstatic i.O : I
    //   745: dup
    //   746: iconst_1
    //   747: iadd
    //   748: putstatic i.O : I
    //   751: baload
    //   752: bastore
    //   753: iinc #1, 1
    //   756: goto -> 729
    //   759: aload_0
    //   760: getstatic i.O : I
    //   763: dup
    //   764: iconst_1
    //   765: iadd
    //   766: putstatic i.O : I
    //   769: baload
    //   770: putstatic i.d : B
    //   773: aload_0
    //   774: getstatic i.O : I
    //   777: dup
    //   778: iconst_1
    //   779: iadd
    //   780: putstatic i.O : I
    //   783: baload
    //   784: putstatic i.e : B
    //   787: aload_0
    //   788: getstatic i.O : I
    //   791: dup
    //   792: iconst_1
    //   793: iadd
    //   794: putstatic i.O : I
    //   797: baload
    //   798: putstatic i.f : B
    //   801: aload_0
    //   802: getstatic i.O : I
    //   805: dup
    //   806: iconst_1
    //   807: iadd
    //   808: putstatic i.O : I
    //   811: baload
    //   812: putstatic i.g : B
    //   815: aload_0
    //   816: getstatic i.O : I
    //   819: dup
    //   820: iconst_1
    //   821: iadd
    //   822: putstatic i.O : I
    //   825: baload
    //   826: putstatic i.h : B
    //   829: aload_0
    //   830: invokestatic a : ([B)I
    //   833: putstatic i.z : I
    //   836: aload_0
    //   837: invokestatic a : ([B)I
    //   840: putstatic i.A : I
    //   843: getstatic i.z : I
    //   846: putstatic i.N : I
    //   849: iconst_0
    //   850: putstatic i.w : Z
    //   853: aload_0
    //   854: getstatic i.O : I
    //   857: dup
    //   858: iconst_1
    //   859: iadd
    //   860: putstatic i.O : I
    //   863: baload
    //   864: putstatic i.i : B
    //   867: iconst_0
    //   868: istore_1
    //   869: iload_1
    //   870: getstatic i.h : [B
    //   873: arraylength
    //   874: if_icmpge -> 899
    //   877: getstatic i.h : [B
    //   880: iload_1
    //   881: aload_0
    //   882: getstatic i.O : I
    //   885: dup
    //   886: iconst_1
    //   887: iadd
    //   888: putstatic i.O : I
    //   891: baload
    //   892: bastore
    //   893: iinc #1, 1
    //   896: goto -> 869
    //   899: iconst_0
    //   900: istore_1
    //   901: iload_1
    //   902: getstatic i.h : [B
    //   905: arraylength
    //   906: if_icmpge -> 931
    //   909: getstatic i.i : [B
    //   912: iload_1
    //   913: aload_0
    //   914: getstatic i.O : I
    //   917: dup
    //   918: iconst_1
    //   919: iadd
    //   920: putstatic i.O : I
    //   923: baload
    //   924: bastore
    //   925: iinc #1, 1
    //   928: goto -> 901
    //   931: iconst_0
    //   932: istore_1
    //   933: iload_1
    //   934: getstatic i.h : [B
    //   937: arraylength
    //   938: if_icmpge -> 963
    //   941: getstatic i.j : [B
    //   944: iload_1
    //   945: aload_0
    //   946: getstatic i.O : I
    //   949: dup
    //   950: iconst_1
    //   951: iadd
    //   952: putstatic i.O : I
    //   955: baload
    //   956: bastore
    //   957: iinc #1, 1
    //   960: goto -> 933
    //   963: iconst_0
    //   964: istore_1
    //   965: iload_1
    //   966: getstatic i.h : [B
    //   969: arraylength
    //   970: if_icmpge -> 995
    //   973: getstatic i.k : [B
    //   976: iload_1
    //   977: aload_0
    //   978: getstatic i.O : I
    //   981: dup
    //   982: iconst_1
    //   983: iadd
    //   984: putstatic i.O : I
    //   987: baload
    //   988: bastore
    //   989: iinc #1, 1
    //   992: goto -> 965
    //   995: iconst_0
    //   996: istore_1
    //   997: iload_1
    //   998: getstatic i.h : [B
    //   1001: arraylength
    //   1002: if_icmpge -> 1027
    //   1005: getstatic i.l : [B
    //   1008: iload_1
    //   1009: aload_0
    //   1010: getstatic i.O : I
    //   1013: dup
    //   1014: iconst_1
    //   1015: iadd
    //   1016: putstatic i.O : I
    //   1019: baload
    //   1020: bastore
    //   1021: iinc #1, 1
    //   1024: goto -> 997
    //   1027: iconst_0
    //   1028: istore_1
    //   1029: iload_1
    //   1030: getstatic i.h : [B
    //   1033: arraylength
    //   1034: if_icmpge -> 1059
    //   1037: getstatic i.m : [B
    //   1040: iload_1
    //   1041: aload_0
    //   1042: getstatic i.O : I
    //   1045: dup
    //   1046: iconst_1
    //   1047: iadd
    //   1048: putstatic i.O : I
    //   1051: baload
    //   1052: bastore
    //   1053: iinc #1, 1
    //   1056: goto -> 1029
    //   1059: iconst_0
    //   1060: istore_1
    //   1061: iload_1
    //   1062: getstatic i.h : [B
    //   1065: arraylength
    //   1066: if_icmpge -> 1091
    //   1069: getstatic i.n : [B
    //   1072: iload_1
    //   1073: aload_0
    //   1074: getstatic i.O : I
    //   1077: dup
    //   1078: iconst_1
    //   1079: iadd
    //   1080: putstatic i.O : I
    //   1083: baload
    //   1084: bastore
    //   1085: iinc #1, 1
    //   1088: goto -> 1061
    //   1091: iconst_0
    //   1092: istore_1
    //   1093: iload_1
    //   1094: getstatic i.h : [B
    //   1097: arraylength
    //   1098: if_icmpge -> 1123
    //   1101: getstatic i.o : [B
    //   1104: iload_1
    //   1105: aload_0
    //   1106: getstatic i.O : I
    //   1109: dup
    //   1110: iconst_1
    //   1111: iadd
    //   1112: putstatic i.O : I
    //   1115: baload
    //   1116: bastore
    //   1117: iinc #1, 1
    //   1120: goto -> 1093
    //   1123: iconst_0
    //   1124: istore_1
    //   1125: iload_1
    //   1126: getstatic i.h : [B
    //   1129: arraylength
    //   1130: if_icmpge -> 1148
    //   1133: getstatic i.a : [Z
    //   1136: iload_1
    //   1137: aload_0
    //   1138: invokestatic a : ([B)Z
    //   1141: bastore
    //   1142: iinc #1, 1
    //   1145: goto -> 1125
    //   1148: iconst_0
    //   1149: istore_1
    //   1150: iload_1
    //   1151: getstatic i.r : [B
    //   1154: arraylength
    //   1155: if_icmpge -> 1180
    //   1158: getstatic i.r : [B
    //   1161: iload_1
    //   1162: aload_0
    //   1163: getstatic i.O : I
    //   1166: dup
    //   1167: iconst_1
    //   1168: iadd
    //   1169: putstatic i.O : I
    //   1172: baload
    //   1173: bastore
    //   1174: iinc #1, 1
    //   1177: goto -> 1150
    //   1180: iconst_0
    //   1181: istore_1
    //   1182: iload_1
    //   1183: getstatic i.r : [B
    //   1186: arraylength
    //   1187: if_icmpge -> 1212
    //   1190: getstatic i.s : [B
    //   1193: iload_1
    //   1194: aload_0
    //   1195: getstatic i.O : I
    //   1198: dup
    //   1199: iconst_1
    //   1200: iadd
    //   1201: putstatic i.O : I
    //   1204: baload
    //   1205: bastore
    //   1206: iinc #1, 1
    //   1209: goto -> 1182
    //   1212: iconst_0
    //   1213: istore_1
    //   1214: iload_1
    //   1215: getstatic i.r : [B
    //   1218: arraylength
    //   1219: if_icmpge -> 1244
    //   1222: getstatic i.t : [B
    //   1225: iload_1
    //   1226: aload_0
    //   1227: getstatic i.O : I
    //   1230: dup
    //   1231: iconst_1
    //   1232: iadd
    //   1233: putstatic i.O : I
    //   1236: baload
    //   1237: bastore
    //   1238: iinc #1, 1
    //   1241: goto -> 1214
    //   1244: iconst_0
    //   1245: istore_1
    //   1246: iload_1
    //   1247: getstatic i.r : [B
    //   1250: arraylength
    //   1251: if_icmpge -> 1276
    //   1254: getstatic i.u : [B
    //   1257: iload_1
    //   1258: aload_0
    //   1259: getstatic i.O : I
    //   1262: dup
    //   1263: iconst_1
    //   1264: iadd
    //   1265: putstatic i.O : I
    //   1268: baload
    //   1269: bastore
    //   1270: iinc #1, 1
    //   1273: goto -> 1246
    //   1276: iconst_0
    //   1277: istore_1
    //   1278: iload_1
    //   1279: getstatic i.r : [B
    //   1282: arraylength
    //   1283: if_icmpge -> 1308
    //   1286: getstatic i.v : [B
    //   1289: iload_1
    //   1290: aload_0
    //   1291: getstatic i.O : I
    //   1294: dup
    //   1295: iconst_1
    //   1296: iadd
    //   1297: putstatic i.O : I
    //   1300: baload
    //   1301: bastore
    //   1302: iinc #1, 1
    //   1305: goto -> 1278
    //   1308: iconst_0
    //   1309: istore_1
    //   1310: iload_1
    //   1311: getstatic i.w : [B
    //   1314: arraylength
    //   1315: if_icmpge -> 1340
    //   1318: getstatic i.w : [B
    //   1321: iload_1
    //   1322: aload_0
    //   1323: getstatic i.O : I
    //   1326: dup
    //   1327: iconst_1
    //   1328: iadd
    //   1329: putstatic i.O : I
    //   1332: baload
    //   1333: bastore
    //   1334: iinc #1, 1
    //   1337: goto -> 1310
    //   1340: iconst_0
    //   1341: istore_1
    //   1342: iload_1
    //   1343: getstatic i.w : [B
    //   1346: arraylength
    //   1347: if_icmpge -> 1372
    //   1350: getstatic i.x : [B
    //   1353: iload_1
    //   1354: aload_0
    //   1355: getstatic i.O : I
    //   1358: dup
    //   1359: iconst_1
    //   1360: iadd
    //   1361: putstatic i.O : I
    //   1364: baload
    //   1365: bastore
    //   1366: iinc #1, 1
    //   1369: goto -> 1342
    //   1372: iconst_0
    //   1373: istore_1
    //   1374: iload_1
    //   1375: getstatic i.w : [B
    //   1378: arraylength
    //   1379: if_icmpge -> 1404
    //   1382: getstatic i.y : [B
    //   1385: iload_1
    //   1386: aload_0
    //   1387: getstatic i.O : I
    //   1390: dup
    //   1391: iconst_1
    //   1392: iadd
    //   1393: putstatic i.O : I
    //   1396: baload
    //   1397: bastore
    //   1398: iinc #1, 1
    //   1401: goto -> 1374
    //   1404: iconst_0
    //   1405: istore_1
    //   1406: iload_1
    //   1407: getstatic i.w : [B
    //   1410: arraylength
    //   1411: if_icmpge -> 1436
    //   1414: getstatic i.z : [B
    //   1417: iload_1
    //   1418: aload_0
    //   1419: getstatic i.O : I
    //   1422: dup
    //   1423: iconst_1
    //   1424: iadd
    //   1425: putstatic i.O : I
    //   1428: baload
    //   1429: bastore
    //   1430: iinc #1, 1
    //   1433: goto -> 1406
    //   1436: iconst_0
    //   1437: istore_1
    //   1438: iload_1
    //   1439: getstatic i.A : [B
    //   1442: arraylength
    //   1443: if_icmpge -> 1468
    //   1446: getstatic i.A : [B
    //   1449: iload_1
    //   1450: aload_0
    //   1451: getstatic i.O : I
    //   1454: dup
    //   1455: iconst_1
    //   1456: iadd
    //   1457: putstatic i.O : I
    //   1460: baload
    //   1461: bastore
    //   1462: iinc #1, 1
    //   1465: goto -> 1438
    //   1468: aload_0
    //   1469: invokestatic a : ([B)I
    //   1472: putstatic i.C : I
    //   1475: aload_0
    //   1476: invokestatic a : ([B)Z
    //   1479: putstatic i.k : Z
    //   1482: aload_0
    //   1483: getstatic i.O : I
    //   1486: dup
    //   1487: iconst_1
    //   1488: iadd
    //   1489: putstatic i.O : I
    //   1492: baload
    //   1493: putstatic i.o : B
    //   1496: aload_0
    //   1497: getstatic i.O : I
    //   1500: dup
    //   1501: iconst_1
    //   1502: iadd
    //   1503: putstatic i.O : I
    //   1506: baload
    //   1507: putstatic i.p : B
    //   1510: aload_0
    //   1511: invokestatic a : ([B)Z
    //   1514: putstatic i.q : Z
    //   1517: aload_0
    //   1518: invokestatic a : ([B)I
    //   1521: putstatic i.G : I
    //   1524: iconst_0
    //   1525: istore_1
    //   1526: iload_1
    //   1527: getstatic i.k : [I
    //   1530: arraylength
    //   1531: if_icmpge -> 1549
    //   1534: getstatic i.k : [I
    //   1537: iload_1
    //   1538: aload_0
    //   1539: invokestatic a : ([B)I
    //   1542: iastore
    //   1543: iinc #1, 1
    //   1546: goto -> 1526
    //   1549: aload_0
    //   1550: getstatic i.O : I
    //   1553: dup
    //   1554: iconst_1
    //   1555: iadd
    //   1556: putstatic i.O : I
    //   1559: baload
    //   1560: putstatic i.s : B
    //   1563: aload_0
    //   1564: getstatic i.O : I
    //   1567: dup
    //   1568: iconst_1
    //   1569: iadd
    //   1570: putstatic i.O : I
    //   1573: baload
    //   1574: putstatic i.t : B
    //   1577: aload_0
    //   1578: getstatic i.O : I
    //   1581: dup
    //   1582: iconst_1
    //   1583: iadd
    //   1584: putstatic i.O : I
    //   1587: baload
    //   1588: putstatic i.u : B
    //   1591: aload_0
    //   1592: invokestatic a : ([B)Z
    //   1595: putstatic i.s : Z
    //   1598: return
    //   1599: pop
    //   1600: return
    // Exception table:
    //   from	to	target	type
    //   4	1598	1599	java/lang/Exception
  }
  
  c() {
    // Byte code:
    //   0: iconst_0
    //   1: putstatic i.x : Z
    //   4: iconst_0
    //   5: putstatic i.y : Z
    //   8: iconst_0
    //   9: putstatic i.v : Z
    //   12: iconst_0
    //   13: putstatic i.w : Z
    //   16: iconst_0
    //   17: putstatic i.c : Z
    //   20: iconst_0
    //   21: putstatic i.k : I
    //   24: iconst_0
    //   25: putstatic i.aa : Z
    //   28: iconst_0
    //   29: putstatic i.ab : Z
    //   32: iconst_0
    //   33: putstatic i.Z : Z
    //   36: iconst_0
    //   37: putstatic i.a : Z
    //   40: iconst_0
    //   41: putstatic i.b : Z
    //   44: iconst_5
    //   45: bipush #100
    //   47: getstatic i.a : Ljava/util/Random;
    //   50: invokestatic a : (IILjava/util/Random;)I
    //   53: putstatic i.P : I
    //   56: iconst_0
    //   57: putstatic i.Q : I
    //   60: iconst_0
    //   61: putstatic i.A : Z
    //   64: iconst_0
    //   65: putstatic i.B : Z
    //   68: iconst_0
    //   69: putstatic i.C : Z
    //   72: iconst_0
    //   73: putstatic i.D : Z
    //   76: iconst_0
    //   77: putstatic i.E : Z
    //   80: iconst_0
    //   81: putstatic i.F : Z
    //   84: iconst_0
    //   85: putstatic i.u : Z
    //   88: iconst_0
    //   89: putstatic i.ac : Z
    //   92: iconst_0
    //   93: putstatic i.ad : Z
    //   96: iconst_0
    //   97: putstatic i.ae : Z
    //   100: iconst_0
    //   101: putstatic i.af : Z
    //   104: iconst_0
    //   105: putstatic i.ag : Z
    //   108: iconst_0
    //   109: putstatic i.ah : Z
    //   112: iconst_0
    //   113: putstatic i.ai : Z
    //   116: iconst_0
    //   117: putstatic i.aj : Z
    //   120: iconst_0
    //   121: putstatic i.ak : Z
    //   124: iconst_0
    //   125: putstatic i.al : Z
    //   128: iconst_0
    //   129: putstatic i.am : Z
    //   132: iconst_0
    //   133: putstatic i.Q : Z
    //   136: iconst_m1
    //   137: putstatic i.R : I
    //   140: iconst_0
    //   141: putstatic i.J : Z
    //   144: iconst_0
    //   145: putstatic i.K : Z
    //   148: iconst_0
    //   149: putstatic i.l : I
    //   152: iconst_0
    //   153: putstatic i.L : Z
    //   156: iconst_0
    //   157: putstatic i.R : Z
    //   160: iconst_0
    //   161: putstatic i.P : Z
    //   164: iconst_0
    //   165: putstatic i.M : Z
    //   168: iconst_0
    //   169: putstatic i.N : Z
    //   172: iconst_0
    //   173: putstatic i.O : Z
    //   176: iconst_0
    //   177: putstatic i.S : Z
    //   180: iconst_0
    //   181: putstatic i.T : Z
    //   184: iconst_0
    //   185: putstatic i.U : Z
    //   188: iconst_0
    //   189: putstatic i.V : Z
    //   192: iconst_0
    //   193: putstatic i.W : Z
    //   196: iconst_0
    //   197: putstatic i.X : Z
    //   200: iconst_0
    //   201: putstatic i.Y : Z
    //   204: iconst_0
    //   205: putstatic i.e : Z
    //   208: iconst_0
    //   209: putstatic i.x : B
    //   212: iconst_0
    //   213: putstatic i.H : Z
    //   216: iconst_0
    //   217: putstatic i.I : Z
    //   220: iconst_3
    //   221: newarray byte
    //   223: putstatic i.F : [B
    //   226: getstatic i.F : [B
    //   229: iconst_0
    //   230: getstatic i.F : [B
    //   233: iconst_1
    //   234: getstatic i.F : [B
    //   237: iconst_2
    //   238: iconst_m1
    //   239: dup_x2
    //   240: bastore
    //   241: dup_x2
    //   242: bastore
    //   243: bastore
    //   244: iconst_0
    //   245: putstatic i.f : Z
    //   248: iconst_0
    //   249: putstatic i.u : B
    //   252: iconst_0
    //   253: putstatic i.m : I
    //   256: sipush #200
    //   259: newarray byte
    //   261: putstatic i.e : [B
    //   264: bipush #100
    //   266: newarray byte
    //   268: putstatic i.f : [B
    //   271: iconst_0
    //   272: istore_0
    //   273: iload_0
    //   274: getstatic i.e : [B
    //   277: arraylength
    //   278: if_icmpge -> 328
    //   281: getstatic i.e : [B
    //   284: iload_0
    //   285: bipush #-127
    //   287: bipush #127
    //   289: getstatic i.a : Ljava/util/Random;
    //   292: invokestatic a : (IILjava/util/Random;)I
    //   295: i2b
    //   296: bastore
    //   297: getstatic i.e : [B
    //   300: iload_0
    //   301: iconst_1
    //   302: iadd
    //   303: iconst_0
    //   304: bipush #127
    //   306: getstatic i.a : Ljava/util/Random;
    //   309: invokestatic a : (IILjava/util/Random;)I
    //   312: i2b
    //   313: bastore
    //   314: getstatic i.f : [B
    //   317: iload_0
    //   318: iconst_1
    //   319: ishr
    //   320: iconst_1
    //   321: bastore
    //   322: iinc #0, 2
    //   325: goto -> 273
    //   328: bipush #93
    //   330: putstatic i.I : I
    //   333: getstatic i.I : I
    //   336: bipush #40
    //   338: imul
    //   339: bipush #100
    //   341: idiv
    //   342: putstatic i.J : I
    //   345: lconst_0
    //   346: putstatic i.a : J
    //   349: iconst_0
    //   350: putstatic i.G : I
    //   353: sipush #212
    //   356: invokestatic t : (I)V
    //   359: iconst_0
    //   360: putstatic i.v : Z
    //   363: iconst_0
    //   364: putstatic i.an : Z
    //   367: iconst_0
    //   368: putstatic i.s : Z
    //   371: iconst_0
    //   372: putstatic i.o : B
    //   375: iconst_0
    //   376: putstatic i.g : Z
    //   379: iconst_0
    //   380: istore_0
    //   381: iload_0
    //   382: getstatic i.C : [B
    //   385: arraylength
    //   386: if_icmpge -> 401
    //   389: getstatic i.C : [B
    //   392: iload_0
    //   393: iconst_m1
    //   394: bastore
    //   395: iinc #0, 1
    //   398: goto -> 381
    //   401: iconst_m1
    //   402: putstatic i.r : I
    //   405: iconst_0
    //   406: putstatic i.s : I
    //   409: iconst_0
    //   410: putstatic i.D : I
    //   413: iconst_0
    //   414: putstatic i.h : Z
    //   417: iconst_0
    //   418: putstatic i.q : Z
    //   421: iconst_0
    //   422: putstatic i.t : I
    //   425: iconst_0
    //   426: istore_0
    //   427: iload_0
    //   428: getstatic i.d : [I
    //   431: arraylength
    //   432: if_icmpge -> 459
    //   435: getstatic i.d : [I
    //   438: iload_0
    //   439: iconst_m1
    //   440: iastore
    //   441: getstatic i.e : [I
    //   444: iload_0
    //   445: iconst_m1
    //   446: iastore
    //   447: getstatic i.a : [[Ljava/lang/String;
    //   450: iload_0
    //   451: aconst_null
    //   452: aastore
    //   453: iinc #0, 1
    //   456: goto -> 427
    //   459: bipush #50
    //   461: newarray byte
    //   463: putstatic i.A : [B
    //   466: iconst_0
    //   467: istore_1
    //   468: iload_1
    //   469: getstatic i.A : [B
    //   472: arraylength
    //   473: if_icmpge -> 489
    //   476: getstatic i.A : [B
    //   479: iload_1
    //   480: bipush #69
    //   482: bastore
    //   483: iinc #1, 1
    //   486: goto -> 468
    //   489: getstatic i.A : [B
    //   492: iconst_0
    //   493: bipush #22
    //   495: bastore
    //   496: getstatic i.A : [B
    //   499: iconst_1
    //   500: bipush #6
    //   502: bastore
    //   503: iconst_1
    //   504: putstatic i.p : B
    //   507: bipush #23
    //   509: iconst_1
    //   510: invokestatic a : (II)[Ljava/lang/String;
    //   513: pop
    //   514: iconst_0
    //   515: putstatic i.h : B
    //   518: bipush #12
    //   520: putstatic i.z : I
    //   523: bipush #12
    //   525: putstatic i.N : I
    //   528: getstatic i.z : I
    //   531: bipush #12
    //   533: isub
    //   534: bipush #24
    //   536: idiv
    //   537: putstatic i.A : I
    //   540: iconst_0
    //   541: putstatic i.i : B
    //   544: iconst_4
    //   545: newarray byte
    //   547: putstatic i.B : [B
    //   550: iconst_4
    //   551: newarray byte
    //   553: putstatic i.p : [B
    //   556: iconst_4
    //   557: newarray byte
    //   559: putstatic i.q : [B
    //   562: iconst_0
    //   563: putstatic i.j : Z
    //   566: bipush #100
    //   568: putstatic i.C : I
    //   571: iconst_0
    //   572: putstatic i.j : Z
    //   575: iconst_0
    //   576: putstatic i.l : Z
    //   579: iconst_m1
    //   580: putstatic i.B : I
    //   583: iconst_m1
    //   584: putstatic i.a : I
    //   587: return
  }
  
  a(paramBoolean) {
    if (m !== 8)
      if (a === -1) {
        p();
      } else {
        n.a(a, -1);
      }  
    if (m === -1 && !paramBoolean) {
      g = false;
      n();
      i();
    } 
    u();
    b(b);
    h.a.h();
  }
  
  v(paramInt) {
    if (paramInt !== -1 && paramInt !== a) {
      a = paramInt;
      m.a(27, h.a);
    } 
  }
  
  d() {
    an = true;
  }
  
  e() {
    an = false;
  }
  
  f() {
    // Byte code:
    //   0: getstatic i.t : I
    //   3: ifle -> 136
    //   6: getstatic i.t : I
    //   9: iconst_1
    //   10: isub
    //   11: putstatic i.t : I
    //   14: iconst_0
    //   15: istore_0
    //   16: iload_0
    //   17: getstatic i.d : [I
    //   20: arraylength
    //   21: if_icmpge -> 41
    //   24: getstatic i.d : [I
    //   27: iload_0
    //   28: iaload
    //   29: iflt -> 35
    //   32: goto -> 41
    //   35: iinc #0, 1
    //   38: goto -> 16
    //   41: getstatic i.d : [I
    //   44: iload_0
    //   45: iconst_m1
    //   46: iastore
    //   47: getstatic i.e : [I
    //   50: iload_0
    //   51: iconst_m1
    //   52: iastore
    //   53: getstatic i.a : [[Ljava/lang/String;
    //   56: iload_0
    //   57: aconst_null
    //   58: aastore
    //   59: getstatic i.t : I
    //   62: ifne -> 84
    //   65: getstatic i.m : I
    //   68: iconst_5
    //   69: if_icmpne -> 84
    //   72: bipush #6
    //   74: putstatic i.m : I
    //   77: iconst_0
    //   78: putstatic i.f : Z
    //   81: goto -> 107
    //   84: getstatic i.t : I
    //   87: ifne -> 107
    //   90: getstatic i.m : I
    //   93: bipush #7
    //   95: if_icmpne -> 107
    //   98: bipush #8
    //   100: putstatic i.m : I
    //   103: iconst_0
    //   104: putstatic i.f : Z
    //   107: getstatic i.C : I
    //   110: ifgt -> 119
    //   113: bipush #8
    //   115: putstatic i.r : B
    //   118: return
    //   119: getstatic i.y : Z
    //   122: ifeq -> 136
    //   125: invokestatic v : ()V
    //   128: invokestatic a : ()V
    //   131: bipush #6
    //   133: putstatic i.r : B
    //   136: return
  }
  
  x() {
    if (t > null) {
      let b;
      for (b = 0; b < d.length && d[b] < 0; b++);
      let f1 = a[b];
      h.a(d[b], f1, e[b]);
      if (d[b] === 152) {
        G = true;
        w = false;
      } 
    } 
  }
  
  a(paramInt1, paramArrayOfString, paramInt2) {
    // Byte code:
    //   0: getstatic i.d : [I
    //   3: getstatic i.t : I
    //   6: iload_0
    //   7: iastore
    //   8: getstatic i.e : [I
    //   11: getstatic i.t : I
    //   14: iload_2
    //   15: iastore
    //   16: getstatic i.a : [[Ljava/lang/String;
    //   19: getstatic i.t : I
    //   22: aload_1
    //   23: aastore
    //   24: getstatic i.t : I
    //   27: getstatic i.d : [I
    //   30: arraylength
    //   31: iconst_1
    //   32: isub
    //   33: if_icmpge -> 44
    //   36: getstatic i.t : I
    //   39: iconst_1
    //   40: iadd
    //   41: putstatic i.t : I
    //   44: return
  }
  
  static a(paramInt1, paramInt2, paramInt3, paramInt4, paramInt5, paramInt6, paramInt7, paramInt8, paramInt9, paramInt10, paramInt11, paramInt12, paramInt13, paramGraphics, paramInt14, paramBoolean) {
    let b1;
    let b2;
    let b3;
    let b4;
    let i17;
    let i18;
    let bool1;
    let bool2;
    let j = paramInt6;
    let k = paramInt8;
    let m = paramInt10;
    let n = paramInt12;
    let i1 = paramInt9 - paramInt7;
    let i2 = paramInt8 - paramInt6;
    let i3 = paramInt13 - paramInt11;
    let i4 = paramInt12 - paramInt10;
    let i5 = paramInt7;
    let i6 = Math.abs(paramInt3 - paramInt2);
    let i7 = paramInt1;
    let i8 = (paramInt4 & 0xFF0000) >> 16;
    let i9 = (paramInt4 & 0xFF00) >> 8;
    let i10 = paramInt4 & 0xFF;
    let i11 = (paramInt5 & 0xFF0000) >> 16;
    let i12 = (paramInt5 & 0xFF00) >> 8;
    let i13 = paramInt5 & 0xFF;
    let i14 = -((i8 - i11 << 8) / i6);
    let i15 = -((i9 - i12 << 8) / i6);
    let i16 = -((i10 - i13 << 8) / i6);
    if (i1 < 0) {
      i1 = -i1;
      b2 = -1;
    } else {
      b2 = 1;
    } 
    if (i2 < 0) {
      i2 = -i2;
      b1 = -1;
    } else {
      b1 = 1;
    } 
    i1 <<= 1;
    i2 <<= 1;
    if (i3 < 0) {
      i3 = -i3;
      b4 = -1;
    } else {
      b4 = 1;
    } 
    if (i4 < 0) {
      i4 = -i4;
      b3 = -1;
    } else {
      b3 = 1;
    } 
    i3 <<= 1;
    i4 <<= 1;
    if (i2 > i1) {
      bool1 = true;
      i17 = i1 - (i2 >> 1);
    } else {
      bool1 = false;
      i17 = i2 - (i1 >> 1);
    } 
    if (i4 > i3) {
      bool2 = true;
      i18 = i3 - (i4 >> 1);
    } else {
      bool2 = false;
      i18 = i4 - (i3 >> 1);
    } 
    let bool3 = true;
    let bool4 = true;
    while (true) {
      if (bool3 && bool4) {
        paramInt14--;
        let i19 = i8 + (i14 * (i7 - paramInt1 + i5 - paramInt2) >> 8);
        let i20 = i9 + (i15 * (i7 - paramInt1 + i5 - paramInt2) >> 8);
        let i21 = i10 + (i16 * (i7 - paramInt1 + i5 - paramInt2) >> 8);
        i19 = f(i19);
        i20 = f(i20);
        i21 = f(i21);
        if (paramInt14 <= 0) {
          paramGraphics.setColor(i19, i20, i21);
          paramGraphics.drawLine(paramInt6, paramInt7, paramInt10, paramInt11);
        } 
        bool3 = false;
        bool4 = false;
        if (paramInt2 === H * 70 / 100) {
          let i22 = i19;
          let i23 = i20;
          let i24 = i21;
          for (let b = 0; b < 4; b++) {
            let i25;
            let i26;
            let i27 = a(95, 105, b);
            i19 = i19 * i27 / 100;
            i20 = i20 * i27 / 100;
            i21 = i21 * i27 / 100;
            i19 = f(i19);
            i20 = f(i20);
            i21 = f(i21);
            if (b === 0) {
              i25 = paramInt6;
              i26 = paramInt10;
            } else {
              i25 = a(paramInt6, paramInt10, b);
              i26 = a(paramInt6, paramInt10, b);
            } 
            paramGraphics.setColor(i19, i20, i21);
            paramGraphics.drawLine(i25, paramInt7, i26, paramInt11);
            i19 = i22;
            i20 = i23;
            i21 = i24;
          } 
        } 
        if (h.a !== null && paramBoolean && paramInt14 <= 0) {
          i19 -= i19 >> 2;
          i20 -= i20 >> 2;
          i21 -= i21 >> 2;
          i19 = f(i19);
          i20 = f(i20);
          i21 = f(i21);
          let i22 = ((i22 = paramInt7 - H + (paramInt7 - H >> 1)) + a(0, i22 >> 3, b)) / 5;
          paramGraphics.setColor(i19, i20, i21);
          if (j !== k)
            paramGraphics.drawLine(paramInt6, paramInt7, paramInt6 + i22, paramInt11); 
          if (m !== n)
            paramGraphics.drawLine(paramInt10 - i22, paramInt7, paramInt10, paramInt11); 
          if (i7 === 66) {
            let b = 3;
            if (j !== k)
              b = 2; 
            if (m !== n)
              b = (b - 1); 
            for (let b5 = 0; b5 < b; b5++) {
              if (a < u.length && a(0, 100, a) < 80) {
                let i23 = 0;
                let i24 = 0;
                if (j !== k)
                  i23 = i22 + 5; 
                if (m !== n)
                  i24 = i22 + 5; 
                if (paramInt10 - i24 <= paramInt6 + i23)
                  break; 
                u[a] = a(paramInt6 + i23, paramInt10 - i24, a);
                v[a] = paramInt7;
                e[a] = (a(0, 100, a) < 50) ? 1 : 0;
                a = (a + 1);
              } 
            } 
          } 
        } 
        if (--paramInt1 <= 0)
          return; 
      } 
      if (!bool3)
        if (bool1) {
          if (i17 >= 0) {
            bool3 = true;
            paramInt7 += b2;
            i17 -= i2;
          } 
          paramInt6 += b1;
          i17 += i1;
        } else {
          if (i17 >= 0) {
            paramInt6 += b1;
            i17 -= i1;
          } 
          paramInt7 += b2;
          bool3 = true;
          i17 += i2;
        }  
      if (!bool4) {
        if (bool2) {
          if (i18 >= 0) {
            bool4 = true;
            paramInt11 += b4;
            i18 -= i4;
          } 
          paramInt10 += b3;
          i18 += i3;
          continue;
        } 
        if (i18 >= 0) {
          paramInt10 += b3;
          i18 -= i3;
        } 
        bool4 = true;
        paramInt11 += b4;
        i18 += i4;
      } 
    } 
  }
  
  a(paramInt1, paramInt2, paramInt3, paramInt4, paramInt5, paramInt6, paramInt7, paramInt8, paramInt9, paramInt10, paramInt11, paramInt12, paramInt13, paramGraphics, paramInt14, paramInt15, paramInt16, paramInt17, paramInt18, paramInt19) {
    let j = 0;
    j = a(paramInt14, paramInt15);
    if (!h || h === 4 || h === 2 || h === 6) {
      paramInt10 = paramInt6 + ((h.a[paramInt16][j * 4 + 1] * 10 << 8) / 1000 * paramInt17 >> 8);
      paramInt12 = paramInt8 + ((h.a[paramInt16][j * 4 + 3] * 10 << 8) / 1000 * paramInt17 >> 8);
      paramInt6 += (h.a[paramInt16][j * 4] * 10 << 8) / 1000 * paramInt17 >> 8;
      paramInt8 += (h.a[paramInt16][j * 4 + 2] * 10 << 8) / 1000 * paramInt17 >> 8;
    } else {
      paramInt10 = paramInt6 + ((h.j[paramInt16][j * 4 + 1] * 10 << 8) / 1000 * paramInt17 >> 8);
      paramInt12 = paramInt8 + ((h.j[paramInt16][j * 4 + 3] * 10 << 8) / 1000 * paramInt17 >> 8);
      paramInt6 += (h.j[paramInt16][j * 4] * 10 << 8) / 1000 * paramInt17 >> 8;
      paramInt8 += (h.j[paramInt16][j * 4 + 2] * 10 << 8) / 1000 * paramInt17 >> 8;
    } 
    a(paramInt1, paramInt2, paramInt3, paramInt4, paramInt5, paramInt6, paramInt7, paramInt8, paramInt9, paramInt10, paramInt11, paramInt12, paramInt13, paramGraphics, paramInt19, true);
  }
  
  a(paramInt1, paramInt2) {
    return a(7, paramInt1, paramInt2, 6) ? (a(7, paramInt1, paramInt2, 2) ? 3 : 2) : (a(7, paramInt1, paramInt2, 2) ? 1 : (a(7, paramInt1, paramInt2, 0) ? 0 : (a(7, paramInt1, paramInt2, 4) ? 0 : 0)));
  }
  
  a(paramInt1, paramByte1, paramByte2, paramInt2) {
 ;
    let j;
    let l;
    let b5;
    let b6;
    let b1 = 0;
    let b2 = 0;
    switch (paramInt2) {
      case 0:
        b2 = -1;
        break;
      case 4:
        b2 = 1;
        break;
      case 6:
        b1 = -1;
        break;
      case 2:
        b1 = 1;
        break;
    } 
    switch (h) {
      case false:
        return (a((paramByte1 + b1), (paramByte2 + b2), 0, 7) === paramInt1);
      case true:
        return (a((paramByte1 - b1), (paramByte2 - b2), 0, 7) === paramInt1);
      case true:
        return (a((paramByte1 + b2), (paramByte2 - b1), 0, 7) === paramInt1);
      case true:
        return (a((paramByte1 - b2), (paramByte2 + b1), 0, 7) === paramInt1);
    } 
    let b3 = 0;
    let b4 = 0;
    let arrayOfByte1 = null;
    let arrayOfByte2 = null;
    switch (h) {
      case true:
        b3 = 1;
        b4 = 3;
        l = h.b;
        arrayOfInt = h.f;
        break;
      case true:
        b3 = 3;
        b4 = 1;
        b5 = h.c;
        j = h.g;
        b1 = -b1;
        b2 = -b2;
        break;
      case true:
        b3 = 3;
        b4 = 3;
        b5 = h.d;
        j = h.i;
        b6 = b1;
        b1 = b2;
        b2 = -b6;
        break;
      case true:
        b3 = 1;
        b4 = 1;
        b5 = h.e;
        j = h.h;
        b6 = b1;
        b1 = -b2;
        b2 = b6;
        break;
    } 
    let k = paramByte1 - d + b3;
    let m = paramByte2 - e + b4;
    let b7 = -1;
    let b8 = -1;
    let n = j[m][k];
    let b9 = 0;
    let b10 = 0;
    let bool = false;
    for (b9 = 0; b9 < b5.length; b9++) {
      for (b10 = 0; b10 < (b5[0]).length; b10++) {
        if (n === b5[b9][b10]) {
          bool = true;
          break;
        } 
      } 
      if (bool)
        break; 
    } 
    let i1 = b10 + b1;
    let i2 = b9 + b2;
    let b11 = b5[i2][i1];
    bool = false;
    for (b9 = 0; b9 < j.length; b9++) {
      for (b10 = 0; b10 < (j[0]).length; b10++) {
        if (b11 === j[b9][b10]) {
          b7 = b10;
          b8 = b9;
          bool = true;
          break;
        } 
      } 
      if (bool)
        break; 
    } 
    if (b7 > k) {
      b1 = 1;
    } else if (b7 < k) {
      b1 = -1;
    } else {
      b1 = 0;
    } 
    if (b8 > m) {
      b2 = 1;
    } else if (b8 < m) {
      b2 = -1;
    } else {
      b2 = 0;
    } 
    return (a((paramByte1 + b1), (paramByte2 + b2), 0, 7) === paramInt1);
  }
  
  f(paramInt) {
    if (paramInt > 255) {
      paramInt = 255;
    } else if (paramInt < 0) {
      paramInt = 0;
    } 
    return paramInt;
  }
  
  g() {
    let b1 = 0;
    c.a(63);
    b1++;
 ;
    b = (arrayOfByte = c.b(63))[0];
    b1++;
    c = arrayOfByte[1];
    b1++;
    d = arrayOfByte[2];
    b1++;
    e = arrayOfByte[3];
    U = e;
    s = new short[b * c];
    g = new byte[b * c];
    let b2 = 0;
    let b3 = 0;
    let b4 = 0;
    let b5 = 0;
    let b6;
    for (b6 = 0; b6 < s.length; b6++) {
      s[b6] = (((arrayOfByte[b1++] & 0xFF) << 8) + (arrayOfByte[b1++] & 0xFF));
      g[b6] = false;
      let k;
      if ((k = (s[b6] & 0xE000) >> 13) === 1 || k === 0) {
        b2 = (b2 + 1);
      } else if (k === 2 || k === 4) {
        b3 = (b3 + 1);
      } 
    } 
    x = new short[b2];
    y = new short[b3];
  = new short[b2];
    for (b6 = 0; b6 < s.length; b6++) {
      let k;
      if ((k = (s[b6] & 0xE000) >> 13) === 1 || k === 0)
        arrayOfShort[b5++] = b6; 
    } 
    A = new short[3];
    z = new short[3];
    C = new short[7];
    for (b6 = 0; b6 < x.length; b6++)
      x[b6] = -1; 
    for (b6 = 0; b6 < y.length; b6++)
      y[b6] = -1; 
    for (b6 = 0; b6 < A.length; b6++)
      A[b6] = -1; 
    for (b6 = 0; b6 < z.length; b6++)
      z[b6] = -1; 
    for (b6 = 0; b6 < C.length; b6++)
      C[b6] = -1; 
    a = new boolean[(b6 = arrayOfByte[b1++]) + 15];
    i = new byte[b6 + 15];
    j = new byte[b6 + 15];
    k = new byte[b6 + 15];
    l = new byte[b6 + 15];
    m = new byte[b6 + 15];
    n = new byte[b6 + 15];
    o = new byte[b6 + 15];
    h = new byte[b6 + 15];
    let b7;
    for (b7 = 0; b7 < b6; b7++) {
      o[b7] = ((arrayOfByte[b1] & 0xFF) >> 4);
      h[b7] = (arrayOfByte[b1++] & 0xF);
      m[b7] = ((arrayOfByte[b1] & 0xFF) >> 4);
      n[b7] = (arrayOfByte[b1++] & 0xF);
      a[b7] = true;
      r(b7);
    } 
    r = new byte[b7 = arrayOfByte[b1++]];
    s = new byte[b7];
    t = new byte[b7];
    u = new byte[b7];
    v = new byte[b7];
    let b8;
    for (b8 = 0; b8 < b7; b8++) {
      r[b8] = arrayOfByte[b1++];
      s[b8] = arrayOfByte[b1++];
      t[b8] = arrayOfByte[b1++];
      u[b8] = 0;
      if (r[b8] === 7) {
        y = s[b8];
        z = t[b8];
      } else if (r[b8] === 2) {
        S = b8;
      } else if (r[b8] === 1) {
        b4 = (b4 + 1);
      } 
    } 
    B = new short[b4];
    for (b8 = 0; b8 < B.length; b8++)
      B[b8] = -1; 
    for (b8 = 0; b8 < b7; b8++) {
      if (r[b8] === 1 && s[b8] === y && t[b8] === z)
        u[b8] = 1; 
    } 
    w = new byte[b8 = arrayOfByte[b1++]];
    x = new byte[b8];
    y = new byte[b8];
    z = new byte[b8];
    for (let b9 = 0; b9 < b8; b9++) {
      w[b9] = arrayOfByte[b1++];
      x[b9] = arrayOfByte[b1++];
      y[b9] = arrayOfByte[b1++];
      z[b9] = 1;
      let k;
      if ((k = a(x[b9], y[b9], 13, 57344)) === 0 || k === 1)
        while (true) {
          let m = a(0, b2 - 1, a);
          if (arrayOfShort[m] !== -1) {
            x[b9] = (arrayOfShort[m] % b);
            y[b9] = (arrayOfShort[m] / b);
            arrayOfShort[m] = -1;
            break;
          } 
        }  
    } 
    let b = arrayOfByte[b1++];
    a = arrayOfByte[b1++];
    if (a === null)
      a = 20; 
    let b10 = 0;
    if (b > 0) {
      a = new byte[8 * b * a * 3];
      for (let b12 = 0; b12 < b; b12++) {
        for (let b13 = 0; b13 < 8; b13++) {
          for (let b14 = 0; b14 < a * 3; b14++)
            a[b10++] = arrayOfByte[b1++]; 
        } 
      } 
    } 
    c.b(63);
    b10 = 0;
    let j;
    for (j = 0; j < r.length; j++) {
      if (r[j] === 5)
        b10++; 
    } 
  = new int[b10];
    for (j = 0; j < arrayOfInt.length; j++)
      arrayOfInt[j] = -1; 
    b10 = 0;
    for (j = 0; j < r.length; j++) {
      if (r[j] === 5) {
        arrayOfInt[b10] = a(s[j], t[j], 9, 7680);
        b10++;
      } 
    } 
    for (let b11 = 0; b11 < arrayOfInt.length; b11++) {
      j = b6 + b11 * 5;
      a[j] = true;
      o[j] = arrayOfInt[b11];
      m[j] = true;
      n[j] = false;
      h[j] = true;
      r(j);
      a(j, 5);
      i[j] = f[0];
      j[j] = f[1];
      for (let b12 = 1; b12 < 5; b12++) {
        a[j + b12] = true;
        o[j + b12] = arrayOfInt[b11];
        m[j + b12] = true;
        n[j + b12] = false;
        h[j + b12] = true;
        r(j + b12);
        a(j + b12, 5);
        i[j + b12] = f[0];
        j[j + b12] = f[1];
      } 
    } 
    System.gc();
  }
  
  b(paramByte1, paramByte2) {
  let j;
  // Llamada a 'a' debe ser con this.a si es método estático de la misma clase
  if ((j = this.a(paramByte1, paramByte2, 13, 57344)) === 3 || j === -1) {
    return;
  }

  if (this.a(paramByte1, paramByte2)) {
    return;
  }

  if (j === 1 || j === 0) {
    for (let b = 0; b < x.length; b++) {
      if (x[b] === -1) {
        x[b] = paramByte1 + paramByte2 * b;
        break;
      }
    }
    return;
  }

  if (j === 2 || j === 4) {
    for (let b = 0; b < y.length; b++) {
      if (y[b] === -1) {
        y[b] = paramByte1 + paramByte2 * b;
        return;
      }
    }
  }
}

  
  c(paramByte1, paramByte2) {
    if (b(paramByte1, paramByte2))
      return; 
    for (let b = 0; b < C.length; b++) {
      if (C[b] === -1) {
        C[b] = (paramByte1 + paramByte2 * b);
        return;
      } 
    } 
  }
  
  w(paramInt) {
    if (a(d, e, paramInt))
      return; 
    if (paramInt === 5) {
      for (let b = 0; b < A.length; b++) {
        if (A[b] === -1) {
          A[b] = (d + e * b);
          if (b === 0)
            r = true; 
          break;
        } 
      } 
      return;
    } 
    if (paramInt === 6) {
      for (let b = 0; b < z.length; b++) {
        if (z[b] === -1) {
          z[b] = (d + e * b);
          break;
        } 
      } 
      return;
    } 
    if (paramInt === 1)
      for (let b = 0; b < B.length; b++) {
        if (B[b] === -1) {
          B[b] = (d + e * b);
          return;
        } 
      }  
  }
  
  a(paramByte1, paramByte2) {
    let j;
    if ((j = a(paramByte1, paramByte2, 13, 57344)) === 3 || j === -1)
      return false; 
    if (j === 1 || j === 0) {
      for (let b = 0; b < x.length; b++) {
        if (x[b] === (paramByte1 + paramByte2 * b))
          return true; 
      } 
    } else if (j === 2 || j === 4) {
      for (let b = 0; b < y.length; b++) {
        if (y[b] === (paramByte1 + paramByte2 * b))
          return true; 
      } 
    } 
    return false;
  }
  
  b(paramByte1, paramByte2) {
    for (let b = 0; b < C.length; b++) {
      if (C[b] === (paramByte1 + paramByte2 * b))
        return true; 
    } 
    return false;
  }
  
  a(paramInt1, paramInt2, paramInt3) {
    if (paramInt3 === 5) {
      for (let b = 0; b < A.length; b++) {
        if (A[b] === (paramInt1 + paramInt2 * b))
          return true; 
      } 
    } else if (paramInt3 === 6) {
      for (let b = 0; b < z.length; b++) {
        if (z[b] === (paramInt1 + paramInt2 * b))
          return true; 
      } 
    } else if (paramInt3 === 1) {
      for (let b = 0; b < B.length; b++) {
        if (B[b] === (paramInt1 + paramInt2 * b))
          return true; 
      } 
    } 
    return false;
  }
  
  a(paramInt1, paramInt2, paramInt3, paramGraphics) {
    for (let b = 0; b < (h.b[paramInt3]).length; b += 3) {
      let c;
      let l = h.b[paramInt3][b + 2];
      if (paramInt3 === 11 || paramInt3 === 12 || paramInt3 === 13 || paramInt3 === 14)
        if (l === 235) {
          if ((i >= 20 && i <= 23) || (i >= null && i <= 4)) {
            c = 'Ã½';
          } else if ((i >= 8 && i <= 11) || (i >= 12 && i <= 16)) {
            c = 'Ã«';
          } else {
            c = 'Ã´';
          } 
        } else if (c === 'Ã¬') {
          if ((i >= 20 && i <= 23) || (i >= null && i <= 4)) {
            c = 'Ã½';
          } else if ((i >= 8 && i <= 11) || (i >= 12 && i <= 16)) {
            c = 'Ã¬';
          } else {
           c = 'Ãµ';
          } 
        } else if (c === 'Ã­') {
          if ((i >= 20 && i <= 23) || (i >= null && i <= 4)) {
            c = 'Ã¿';
          } else if ((i >= 8 && i <= 11) || (i >= 12 && i <= 16)) {
            c = 'Ã­';
          } else {
            c = 'Ã¶';
          } 
        } else if (c === 'Ã®') {
          if ((i >= 20 && i <= 23) || (i >= null && i <= 4)) {
            c = 'Ä€';
          } else if ((i >= 8 && i <= 11) || (i >= 12 && i <= 16)) {
            c = 'Ã®';
          } else {
            c = 'Ã·';
          } 
        } else if (c === 'Ã¯') {
          if ((i >= 20 && i <= 23) || (i >= null && i <= 4)) {
            c = 'Ä';
          } else if ((i >= 8 && i <= 11) || (i >= 12 && i <= 16)) {
            c = 'Ã¯';
          } else {
            c = 'Ã¸';
          } 
        } else if (c === 'Ã°') {
          if ((i >= 20 && i <= 23) || (i >= null && i <= 4)) {
            c = 'Ä‚';
          } else if ((i >= 8 && i <= 11) || (i >= 12 && i <= 16)) {
            c = 'Ã°';
          } else {
            c = 'Ã¹';
          } 
        } else if (c === 'Ã²') {
          if ((i >= 20 && i <= 23) || (i >= null && i <= 4)) {
            c = 'Ä„';
          } else if ((i >= 8 && i <= 11) || (i >= 12 && i <= 16)) {
            c = 'Ã²';
          } else {
            c = 'Ã»';
          } 
        } else if (c === 'Ã³') {
          if ((i >= 20 && i <= 23) || (i >= null && i <= 4)) {
            c = 'Ä…';
          } else if ((i >= 8 && i <= 11) || (i >= 12 && i <= 16)) {
            c = 'Ã³';
          } else {
            c = 'Ã¼';
          } 
        } else if (c === 'Ã±') {
          if ((i >= 20 && i <= 23) || (i >= null && i <= 4)) {
            c = 'Äƒ';
          } else if ((i >= 8 && i <= 11) || (i >= 12 && i <= 16)) {
            c = 'Ã±';
          } else {
            c = 'Ãº';
          } 
        }  
      c.a(paramInt1 + h.b[paramInt3][b], paramInt2 + h.b[paramInt3][b + 1], c, paramGraphics);
    } 
  }
  
  h() {
    a = new f(150, 0, 0, 0, 0, 0, true);
    b = new f(300, 0, 0, 0, 0, 0, false);
    c = new f(80, 0, 8, 0, 0, 0, false);
    D = new short[80];
    for (let b = 0; b < 80; b++)
      D[b] = 290; 
    Y = 0;
    p = new int[150];
    q = new int[150];
    r = new int[150];
    G = new byte[150];
    A = 0;
  }
  
  x(paramInt) {
    switch (A) {
      case 4:
        j = 0;
        switch (B) {
          case 0:
            switch (h) {
              case true:
              case true:
              case true:
                j = 1;
                break;
              case true:
              case true:
              case true:
                j = -1;
                break;
            } 
            break;
          case 2:
            switch (h) {
              case false:
              case true:
              case true:
              case true:
              case true:
              case true:
                j = 1;
                break;
            } 
            break;
          case 1:
            switch (h) {
              case false:
              case true:
              case true:
              case true:
              case true:
              case true:
                j = 1;
                break;
            } 
            break;
          case 7:
            switch (h) {
              case false:
              case true:
              case true:
                j = 1;
                break;
              case true:
              case true:
              case true:
                j = -1;
                break;
            } 
            break;
          case 4:
            switch (h) {
              case true:
              case true:
              case true:
                j = -1;
                break;
              case true:
              case true:
              case true:
                j = 1;
                break;
            } 
            break;
          case 3:
            switch (h) {
              case false:
              case true:
              case true:
                j = -1;
                break;
              case true:
              case true:
              case true:
                j = 1;
                break;
            } 
            break;
          case 5:
            switch (h) {
              case false:
              case true:
              case true:
              case true:
              case true:
              case true:
                j = -1;
                break;
            } 
            break;
          case 6:
            switch (h) {
              case false:
              case true:
              case true:
              case true:
              case true:
              case true:
                j = -1;
                break;
            } 
            break;
        } 
        a.c = j << 14;
        b.c = j << 13;
        A = 1;
        break;
      case 1:
        V = 150;
        break;
      case 2:
        W += paramInt;
        if (W > 40) {
          V++;
          W = 0;
        } 
        if (V >= 150) {
          A = 1;
          V = 150;
          W = 0;
        } 
        break;
      case 3:
        W += paramInt;
        if (W > 40) {
          V--;
          W = 0;
        } 
        if (V <= 0)
          A = 0; 
        break;
    } 
    if (A === 2 || A === 3 || A === 1) {
      X += paramInt;
      if (X > 60) {
        X = 0;
        for (j = 0; j < a.g; j++) {
          if (p[j] !== 0)
            G[j] = (G[j] + 1); 
        } 
      } 
    } 
    a.a(paramInt);
    b.a(paramInt);
    Y += paramInt;
    if (Y > 200) {
      Y -= 200;
      j = a.c >> 14;
      let s = 0;
      let c = Character.MIN_VALUE;
      if (j < 0) {
        s = -5;
        c = ';
      } else if (j > 0) {
        s = -181;
        c = ';
      } else {
        s = -5;
        c = ';
      } 
      a.a(25 * V / 100, s, -104, c, 0, -5, 169, 181, 173, 169, 253, 700, 100, true);
      b.a(50 * V / 100, s, -104, c, 0, -5, 99, 181, 103, 42, 84, 531, 100, false);
    } 
    c.a(paramInt);
    for (let j = 0; j < c.f; j++) {
      if (c.a[j] > 400) {
        D[j] = 288;
      } else if (c.a[j] > 400) {
        D[j] = 289;
      } else {
        D[j] = 290;
      } 
    } 
  }
  
  l(paramGraphics) {
    if (A === 0 || c !== null || h || e !== 0 || a(d, e, 13, 57344) === 2 || a(d, e, 13, 57344) === 4)
      return; 
    paramGraphics.setClip(0, 0, 176, 169);
    let j;
    if ((j = a(d, e, 0, 7)) === 0 || j === 3 || j === 7) {
      if ((i >= 19 && i <= 23) || (i >= null && i <= 4)) {
        paramGraphics.setColor(1118498);
      } else {
        paramGraphics.setColor(7829384);
      } 
      for (let b1 = 0; b1 <= b.f; b1++) {
        let k = (b.b[b1] >> 14) + 0;
        let m = (b.c[b1] >> 14) + 0;
        paramGraphics.drawLine(k, m - 1, k, m);
      } 
    } 
    let b;
    for (b = 0; b <= a.f; b++) {
      let k = (a.b[b] >> 14) + 0;
      let m = (a.c[b] >> 14) + 0;
      let n;
      if ((n = a.e[b] >> 14) < 3) {
        if ((i >= 19 && i <= 23) || (i >= null && i <= 4)) {
          paramGraphics.setColor(1118498);
        } else {
          paramGraphics.setColor(7829384);
        } 
      } else if ((i >= 19 && i <= 23) || (i >= null && i <= 4)) {
        paramGraphics.setColor(2236979);
      } else {
        paramGraphics.setColor(8947865);
      } 
      paramGraphics.drawLine(k, m, k + (a.c >> 14), m + n);
    } 
    for (b = 0; b <= a.f; b++) {
      if (p[b] !== 0 && q[b] !== 0 && G[b] < 6) {
        paramGraphics.setColor(a(7, true, false));
        paramGraphics.drawArc(p[b] - r[b] - G[b], q[b] - r[b] - (G[b] >> 1), G[b] * 2 + r[b], G[b] + r[b], 0, 360);
      } 
    } 
    paramGraphics.setClip(0, 0, 176, 208);
  }
  
  a(paramInt1, paramInt2, paramInt3, paramInt4) {
    let j = paramInt1 >> 14;
    let k = paramInt2 >> 14;
    if (c(j + 18, k) && c(j - 18, k)) {
      p[paramInt4] = j;
      q[paramInt4] = k;
      r[paramInt4] = paramInt3 >> 1;
      return;
    } 
    p[paramInt4] = 0;
    q[paramInt4] = 0;
    r[paramInt4] = 0;
    G[paramInt4] = 0;
  }
  
  y() {
    for (let b = 0; b < 20; b++) {
      s[b] = 0;
      t[b] = 0;
    } 
    Z = 0;
  }
  
  a(paramInt1, paramByte, paramInt2) {
    let j;
    let k;
    let b;
    C = paramByte;
    switch (paramByte) {
      case 0:
        j = 88 - ((k + l - 1) * (u + y) >> 1) + paramInt1 * (u + y);
        k = 0 + H + 7 + 20 + 33;
        if (A[o * 2] === 8 || A[o * 2] === 1 || A[o * 2] === 25) {
          c.b = 18;
          c.c = 4096;
          for (let m = -(u - 4) >> 2; m < u - 2 >> 2; m++)
            c.a(1, j + m * 2 + a(-1, 1, a), k + m * 1 + a(-1, 1, a), 1, 2, 0, 1, 500, 0); 
          return;
        } 
        if (paramInt1 + (paramInt1 + 1) * paramInt2 < 10) {
          j += a(-u >> 2, u >> 2, a);
          k += a(-v >> 2, v >> 2, a);
          s[paramInt1 + (paramInt1 + 1) * paramInt2] = j;
          t[paramInt1 + (paramInt1 + 1) * paramInt2] = k;
          return;
        } 
        break;
      case 1:
      case 2:
        c.b = 18;
        c.c = 4096;
        for (b = -8; b < 2; b++) {
          for (let b1 = 0; b1 < 3; b1++) {
            let m;
            if ((m = 44 + (paramInt1 + b) * 3 + a(-1, 1, a)) > 132)
              return; 
            c.a(1, m, 42 + (paramInt1 + b) * 2 + a(-1, 1, a) + b1 * 21, 1, 2, 0, 1, 500, 0);
          } 
        } 
        return;
      case 3:
        if (Z < 10) {
          j = a(44, 132, a);
          k = a(52, 104, a);
          if (Z + 10 < 20) {
            s[Z + 10] = j;
            t[Z + 10] = k;
            Z++;
            c.b = 18;
            c.c = 0;
            c.a(3, j - 10, k, 10, 20, 500, 0);
            c.a(3, j + 10, k, 10, 20, 500, 0);
            c.a(3, j, k + 10, 10, 20, 500, 0);
          } 
        } 
        break;
    } 
  }
  
  m(paramGraphics) {
    paramGraphics.setClip(0, 0, 176, 169);
    let b;
    for (b = 0; b < 10; b++) {
      if (s[b] !== 0 && t[b] !== 0)
        c.a(s[b], t[b], 381, paramGraphics); 
    } 
    for (b = 10; b < 20; b++) {
      if (s[b] !== 0 && t[b] !== 0)
        c.a(s[b], t[b], 380, paramGraphics); 
    } 
    paramGraphics.setColor(11468800);
    for (b = 0; b <= c.f; b++) {
      let j = (c.b[b] >> 14) + 0;
      let k = (c.c[b] >> 14) + 0;
      if (C === 2 || (C === 0 && A[o * 2] === 8)) {
        if (c.a[b] > 400 || c.a[b] < 200) {
          paramGraphics.fillRect(j, k, 1, 1);
        } else {
          paramGraphics.fillRect(j, k, 2, 2);
        } 
      } else {
        c.a(j, k, D[b], paramGraphics);
      } 
    } 
    paramGraphics.setClip(0, 0, 176, 208);
  }
  
  n(paramGraphics) {
    if (E === 0)
      return; 
    let j = ao ? (296 - D) : (291 + D);
    for (let b = 0; b < 12; b++) {
      for (let b1 = 0; b1 < 14; b1++)
        c.a(b * 16, b1 * 16, j, paramGraphics); 
    } 
  }
  
  y(paramInt) {
    if (E === 1) {
      aa += paramInt;
      if (aa > 70) {
        aa = 0;
        D = (D + 1);
        if (D === 6) {
          E = 0;
          D = 0;
          if (F !== 0) {
            u = 1;
            return;
          } 
          if (G !== null) {
            if (ao) {
              w = true;
              return;
            } 
            G = false;
          } 
        } 
      } 
    } 
  }
  
  b(paramBoolean) {
    ao = paramBoolean;
    E = 1;
  }
  
  static {
    (new short[6])[0] = 64;
    (new short[6])[1] = 128;
    (new short[6])[2] = 64;
    (new short[6])[3] = 64;
    (new short[6])[4] = 128;
    (new short[6])[5] = 64;
  }
  
  static {
    (new int[6])[0] = 16513333;
    (new int[6])[1] = 16513333;
    (new int[6])[2] = 16513333;
    (new int[6])[3] = 16513333;
    (new int[6])[4] = 16513333;
    (new int[6])[5] = 16513333;
  }
  
  static {
    (new byte[2])[0] = 15;
    (new byte[2])[1] = 3;
    (new byte[8][])[0] = new byte[2];
    (new byte[2])[0] = 22;
    (new byte[2])[1] = 6;
    (new byte[8][])[1] = new byte[2];
    (new byte[2])[0] = 25;
    (new byte[2])[1] = 14;
    (new byte[8][])[2] = new byte[2];
    (new byte[2])[0] = 22;
    (new byte[2])[1] = 22;
    (new byte[8][])[3] = new byte[2];
    (new byte[2])[0] = 15;
    (new byte[2])[1] = 25;
    (new byte[8][])[4] = new byte[2];
    (new byte[2])[0] = 7;
    (new byte[2])[1] = 22;
    (new byte[8][])[5] = new byte[2];
    (new byte[2])[0] = 4;
    (new byte[2])[1] = 14;
    (new byte[8][])[6] = new byte[2];
    (new byte[2])[0] = 7;
    (new byte[2])[1] = 6;
    (new byte[8][])[7] = new byte[2];
  }
}