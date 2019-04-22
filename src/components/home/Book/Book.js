import React from "react";

const Book = () => {
  return (
    <section className="section-tours" id="order">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-seconday">立即下單</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  單字
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>單字 $180</li>
                  <li>5個字以上特價</li>
                  <li>第6個字 $160</li>
                  <li>鑰匙圈加 $19</li>
                  <li>$3000 以上免運費</li>
                </ul>
              </div>
            </div>

            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">單字只要</p>
                  <p className="card__price-value">$180起</p>
                </div>
                <a href="/" className="btn btn--white">
                  下單
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  字串
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>2 字串鑰匙圈 $420</li>
                  <li>3 字串鑰匙圈 $620</li>
                  <li>4 字串鑰匙圈 $820</li>
                  <li>字串擺飾(鑰匙圈相同)</li>
                  <li>$3000 以上免運費</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">字串只要</p>
                  <p className="card__price-value">$420起</p>
                </div>
                <a href="/" className="btn btn--white">
                  下單
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  5個字母以上 (特價)
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>第6個字 $160</li>
                  <li>第6個字 $160</li>
                  <li>$3000 以上免運費</li>
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">6字只要</p>
                  <p className="card__price-value">$1060起</p>
                </div>
                <a href="/" className="btn btn--white">
                  下單
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
