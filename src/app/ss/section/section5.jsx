import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

const AccordionItem = ({ title, activeElement, onClick, content }) => (
  <div
    className={`w-[100%] border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-xl ${
      activeElement === title && `shadow-none`
    }`}
  >
    <h2 className="mb-0">
      <button
        className={`group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white ${
          activeElement === title &&
          `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
        }`}
        type="button"
        onClick={() => onClick(title)}
        aria-expanded={activeElement === title}
        aria-controls={`collapse-${title}`}
      >
        {title}
        <span
          className={`${
            activeElement === title
              ? `rotate-[-180deg] `
              : `rotate-0 fill-[#212529]  dark:fill-white`
          } mx-5 h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
        >
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg> */}
          <i class="bi bi-chevron-down"></i>
        </span>
      </button>
    </h2>
    <TECollapse
      show={activeElement === title}
      className={`!mt-0 ${
        activeElement === title && `!rounded-b-none !shadow-none`
      }`}
    >
      <div className="px-5 py-4">{content}</div>
    </TECollapse>
  </div>
);

const AccordionBasicExample = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    setActiveElement((prev) => (prev === value ? "" : value));
  };

  return (
    <>
      <div id="accordionExample" className="w-[100%] md:w-[90%] xl:w-[50%] flex flex-wrap gap-3 my-5 font-bold">
        <AccordionItem
          title="1. با اسکریپت کارتا چه محصولاتی را می توانیم بفروشیم و با آن به در آمد برسیم؟ "
          activeElement={activeElement}
          onClick={handleClick}
          content={
            <strong className="text-zinc-500 text-[1rem] font-normal">
              اسکریپت کارتا مناسب فروشگاه های است که بعد از فروش به خریدار(کاربر
              سایت) یوزرنیم، رمز، سریال یا داده هایی شبیه کد ارائه می دهند. برای
              مثال کارت شارژ ها، گیفت کارت ها(از جمله: آیتونز، گوگل پلی، ایکس
              باکس، استیم، اسپاتیفای آمریکا و )، اکانت های بازی، دبیت کارت ها،
              سرویس کاهش پینگ، لایسنس نود ۳۲، سرویس کریو، اکانت های نرم افزاری و
              با اسکریپت کارتا قابل فروش هستند.
            </strong>
          }
        />
        <AccordionItem
          title="2. آیا سورس این اسکریپت کد باز هست؟"
          activeElement={activeElement}
          onClick={handleClick}
          content={
            <strong className="text-zinc-500 text-[1rem] font-normal">
              بله، این اسکریپت به صورت کد باز(Open Source) ارائه شده است و شما
              می توانید کد های آن را تغییر دهید.
            </strong>
          }
        />
        <AccordionItem
          title="3. با خرید اسکریپت مجاز به نصب و استفاده برای چند دامین هستم؟"
          activeElement={activeElement}
          onClick={handleClick}
          content={
            <strong className="text-zinc-500 text-[1rem] font-normal">
              فقط می توانید برای یک دامین استفاده کنید. و اگر برای دامین دیگری
              می خواهید استفاده کنید مجدد کارتا را خریداری کنید.
            </strong>
          }
        />
        <AccordionItem
          title="4. امکان نصب این اسکریپت روی وردپرس وجود دارد؟"
          activeElement={activeElement}
          onClick={handleClick}
          content={
            <strong className="text-zinc-500 text-[1rem] font-normal">
              خیر، اسکریپت کارتا افزونه وردپرس نیست و نمی توان آن را روی وردپرس
              نصب کرد ولی می توان در کنار وردپرس، کارتا را نصب کرد
            </strong>
          }
        />
        <AccordionItem
          title="5. نصب اسکریپت کارتا بر روی سرور آسان است؟"
          activeElement={activeElement}
          onClick={handleClick}
          content={
            <strong className="text-zinc-500 text-[1rem] font-normal">
              کارتا امکانی را فراهم کرده که شما به راحتی می توانید اسکریپت را بر
              روی سرورتان نصب کنید. هر چند اگر باز هم به مشکل خاصی برخورد کردید،
              ما در کنار شما برای رفع مشکل هستیم.
            </strong>
          }
        />
        <AccordionItem
          title="6. امکان تغییر گروهی قیمت ها به صورت دلاری وجود دارد؟"
          activeElement={activeElement}
          onClick={handleClick}
          content={
            <strong className="text-zinc-500 text-[1rem] font-normal">
              بله، با توجه به تغییر و نوسانات ارزها کارتا برای راحتی مدیر سایت
              امکانی را فراهم کرده است که بتواند محصولات خود را به صورت دلار،
              یورو، پوند و درهم وارد کند و با تنظیم ارزش ارز به تومان در تنظیمات
              تمام قیمت محصولات را یکجا به روز کند.
            </strong>
          }
        />
        <AccordionItem
          title="7. پنل های پیامکی پیش فرض کارتا چیست؟"
          activeElement={activeElement}
          onClick={handleClick}
          content={
            <strong className="text-zinc-500 text-[1rem] font-normal">
              به طور پیش فرض پنل پیامکی رنگینه، کاوه نگار، ملی پیامک و SMS.ir در
              کارتا با امکان استفاده از الگو(پترن) وجود دارد. اما اگر پنل پیامکی
              دیگری مد نظر شماست با زدن تیکت در راستچین می توانید از انجام شدن
              آن یا هزینه اش مطلع شوید.
            </strong>
          }
        />
        <AccordionItem
          title="8. درگاه های پرداختی پیش فرض کارتا چیست؟"
          activeElement={activeElement}
          onClick={handleClick}
          content={
            <strong className="text-zinc-500 text-[1rem] font-normal">
              به طور پیش فرض درگاه ملت، سامان، صادرات، پارسیان، آیدی پی، بیت پی،
              زرین پال، زیبال، سپال، نکست پی و وندار در کارتا وجود دارد. اما اگر
              درگاه دیگری مد نظر شماست با زدن تیکت در راستچین می توانید از انجام
              شدن آن یا هزینه اش مطلع شوید.
            </strong>
          }
        />
        <AccordionItem
          title="9. آیا اسکریپت کارتا دارای سیستم تیکت و پشتیبانی است؟"
          activeElement={activeElement}
          onClick={handleClick}
          content={
            <strong className="text-zinc-500 text-[1rem] font-normal">
              بله، کارتا حاوی یک ماژول قوی تیکت(پشتیبانی) هست که دارای UX و UI
              بسیار خوبی است و علاوه بر این امکان ارسال فایل نیز در آن فراهم شده
              است.
            </strong>
          }
        />
        <AccordionItem
          title="10. کاربرد خرید غیر آنی و با تاخیر در کارتا چیست؟"
          activeElement={activeElement}
          onClick={handleClick}
          content={
            <strong className="text-zinc-500 text-[1rem] font-normal">
              فرض کنید شما می خواهید یک سری کارت به مشتریانتان بفروشید، ولی به
              دلایل زیر نمی خواهید همان موقع کد ها را نمایش دهید و می خواهید
              بعدا اطلاعات کارت در دسترس مشتری قرار دهید. کارت را هنوز از منبع
              خرید نکرده اید و می خواهید بعد از اینکه کاربر پرداخت انجام داد،
              شما از منبعتان خرید کنید و کدها(رمزها، سریال ها و ...) در دسترسش
              قرار دهید. فرآیند انجام کار زمان بر است. می خواهید مطمئن شوید که
              کارت بانکی که با آن پرداخت کرده است متعلق به خود خریدار باشد، بعد
              کدها(رمزها، سریال ها و ...) در دسترسش قرار دهید. زمانی که می
              خواهید یک داده از کاربر بگیرید و طبق آن سفارش را انجام دهید و بعد
              کدها(رمزها، سریال ها و ...) در دسترسش قرار دهید.
            </strong>
          }
        />
        <AccordionItem
          title="11. آیا کاربر برای خرید کردن باید لاگین کند؟"
          activeElement={activeElement}
          onClick={handleClick}
          content={
            <strong className="text-zinc-500 text-[1rem] font-normal">
              در تنظیمات گزینه ای وجود دارد که مدیر سایت تصمیم می گیرد که کاربر
              حتما باید لاگین باشد تا خرید کند یا بدون لاگین کردن هم می تواند
              خرید کند. چنانچه این گزینه فعال باشد و کاربر لاگین نباشد آنگاه قبل
              از درگاه کاربر باید شماره همراه اش را تایید کند.
            </strong>
          }
        />
        <AccordionItem
          title="12. احراز هویت (ثبت نام و لاگین) در کارتا به چه صورت است؟"
          activeElement={activeElement}
          onClick={handleClick}
          content={
            <strong className="text-zinc-500 text-[1rem] font-normal">
              بسیار آسان و با امنیت بالا طی دو مرحله ثبت نام یا لاگین کاربر با
              UX عالی انجام می شود. کاربر شماره همراه خود را وارد می کند، سپس کد
              تایید برایش پیامک می شود و در نهایت کد تایید را وارد می کند و
              لاگین می شود. تمام شد و رفت، اصلا نیاز به رمز عبور، بازیابی رمز
              عبور، تغییر رمز عبور و به خاطر سپردن رمز عبور نیست.
            </strong>
          }
        />
        <AccordionItem
          title="13. تفاوت کارتا با اسکریپت های رایگان در این زمینه چیه؟"
          activeElement={activeElement}
          onClick={handleClick}
          content={
            <strong className="text-zinc-500 text-[1rem] font-normal">
              1. پشتیبانی
              <br />
              2. خرید راحت و آسان
              <br />
              3. بروزرسانی مداوم و رایگان
              <br />
              4. UI , UX بهتر
              <br />
              5. محصول تیمی و از پایه کدنویسی شده بومی(کپی و نال شده نیست){" "}
              <br />
              6. امکان درج چندین قیمت با توجه به تعداد خرید(عمده و خرده) <br />
              7. پنل مدیریت سریع و کاملا کارا
              <br />
              8. کوپن تخفیف
              <br />
              9. امکان مدیریت و تعریف بدون محدودیت صفحه و Page برای سایت(این
              مورد برای آموزش و نمایش قوانین و مقررات و جشنواره های فروش بسیار
              کاربرد دارد) <br />
              10. امکان مدیریت منوهای بالا و پایین سایت
              <br />
              11. تنظیمات متنوع و گسترده در مدیریت
              <br />
              12. امکان آفلاین کردن سایت به صورت موقت با متن و عکس سفارشی
              <br />
              13. امکان نمایش پیام های راهنمای خرید به کاربر زیر قسمت دریافت
              ایمیل و شماره همراه به صورت نامحدود
              <br />
              14. امکان مدیریت و تعریف مدیران سایت
              <br />
              15. خروجی اکسل از شماره تلفن ها و ایمیل خریداران توسط مدیر
              <br />
              16. نمودار فروش روزانه و ماهانه
              <br />
              17. تغییر یکجا همه قیمت ها با توجه به نوسانات دلار، یورو، پوند و
              درهم
              <br />
              18. فروش کارت های غیر آنی (می توانید کد، رمز یا سریال را بلافاصله
              بعد از پرداخت به کاربر نمایش ندهید و با تاخیر کد، رمز یا سریال
              خریداری شده را ارائه دهید.) <br />
              19. احراز هویت با UX بالا بدون استفاده از رمز عبور <br />
              20. مشاهده لیست کارت های خریداری شده توسط کاربر(خریدار) <br />
              21. مشاهده لیست تراکنش های انجام شده توسط کاربر(خریدار)
            </strong>
          }
        />
      </div>
    </>
  );
};

export default AccordionBasicExample;
