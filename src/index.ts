import crypto from "crypto";

interface BlockShape {
  hash: string; // 해쉬 값
  prevHash: string; // 이전 해쉬 값
  height: number; // 1,2,3 같이 블록의 위치를 표시
  data: string; // 블록이 보보할 데이터
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha-256").update(toHash).digest("hex");
  }
}
