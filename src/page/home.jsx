import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import About from "~/components/about-me";
import Banner from "~/components/banner";
import Footer from "~/components/footer";
import Header from "~/components/header";
import MedicalProduct from "~/components/medical-products";
import NewsAchievements from "~/components/news-achievements";
import ServiceTab from "~/components/service";
import { firebase_store } from "~/config/firebase-config";

const news = [
  {
    id: 1,
    title: "Vinmec lập các chốt kiểm dịch 2019 – nCoV",
    author: "Ego Creative",
    date: "30/03/2020",
    img: [
      "https://bizweb.dktcdn.net/100/382/483/articles/kham-suc-khoe-the-xanh-la-gi-1.jpg?v=1585508387523",
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/files/kham-suc-khoe-the-xanh-la-gi-1.jpg?v=1585508378603",
    ],
    content: [
      "Tất cả các bệnh viện Vinmec trên toàn quốc lập các chốt kiểm dịch 2019 - nCoV, hàng ngày sàng lọc, đo thân nhiệt cho 100% khách hàng, thân nhân và nhân viên y tế.",
      "Từ ngày 4 - 5/2, tất cả các bệnh viện và văn phòng công ty không chỉ thực hiện sàng lọc với khách hàng mà còn đối với 100% cán bộ, nhân viên y tế. Toàn bộ nhân viên sẽ được đo nhiệt độ và dán nhãn màu Xanh nếu nhiệt độ bình thường. Các trường hợp có dấu hiệu sốt/ho/khó thở phải đeo khẩu trang ngay và được hướng dẫn đến đến cơ sở y tế để tư vấn, khám, điều trị kịp thời. Đồng thời các nhân viên cũng được khuyến khích chủ động thông báo với cán bộ quản lý trực tiếp triệu chứng ho/sốt/khó thở và địa điểm đã di chuyển trong giai đoạn Tết nguyên đán.",
      "Đặc biệt tại Vinmec Nha Trang, trong điều kiện tỉnh Khánh Hòa đã phát hiện ca bệnh dương tính nên hàng ngày bệnh viện đã thực hiện khảo sát tình trạng sức khỏe 100% nhân viên y tế qua hình thức quét mã QR để có cơ sở dữ liệu theo dõi đầy đủ, không bỏ lọt bất cứ trường hợp nghi ngờ nào.",
    ],
  },
  {
    id: 2,
    title: "Biến chứng của phẫu thuật cắt túi mật nội soi",
    author: "Ego Creative",
    date: "30/03/2020",
    img: [
      "https://bizweb.dktcdn.net/100/382/483/articles/auc1576544994.jpg?v=1585508274013",
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/files/auc1576544994.jpg?v=1585508266598",
    ],
    content: [
      "Những biến chứng nghiêm trọng xảy ra trong cắt túi mật nội soi bao gồm tổn thương đường mật, rò mật, chảy máu và tổn thương ruột do sự lựa chọn bệnh nhân, kinh nghiệm của phẫu thuật viên và sự gượng gạo về kỹ thuật. Kiểu tổn thương đường mật chính do nhiệt có thể không nhận ra trong lúc mổ và thường liên quan đến ống gan chung hoặc ống gan phải.",
      "Theo một nghiên cứu tập hợp dữ liệu từ 7 nghiên cứu lớn với tổng số 8856 trường hợp cắt túi mật nội soi, biến chứng nghiêm trọng chiếm 2.6%. Biến chứng chảy máu chiếm 0.11-1.97%, abscess 0.14-0.3%, rò mật 0.3-0.9%, tổn thương đường mật 0.26-0.6% và tổn thương ruột 0.14-0.35%. Tỉ lệ nhiễm trùng vết mổ của phẫu thuật nội soi thấp hơn mổ mở nhưng không khác biết về tỉ lệ abscess ổ bụng.",
      "Tỉ lệ biến chứng toàn bộ liên quan tới kinh nghiệm của phẫu thuật viên. Một báo cáo trên 8800 trường hợp cắt túi mật nội soi được thực hiện bởi 55 phẫu thuật viên, ước tính tỉ lệ tổn thương đường mật 90% trong 30 trường hợp đầu tiên với mỗi phẫu thuật viên, với tỉ lệ giảm từ 1.7% ở trường hợp đầu tiên xuống còn 0.17% ở ca thứ 50. Trong các nghiên cứu, tỉ lệ tổn thương đường mật chiếm 0.4 - 0.6%, gấp 4 lần so với mổ mở.",
      "Những phẫu thuật viên có nhiều kinh nghiệm có tỉ lệ biến chứng thấp nhất. Ngày nay, cắt túi mật nội soi gần như trở thành thường quy, nhiều bệnh viện hiện nay đã, đang và sẽ áp dụng kỹ thuật này sẽ được đòi hỏi một chứng nhận thực hành từ một trung tâm đào tạo có ưu tính. Tại Hoa kỳ, Hội phẫu thuật viên Hoa Kỳ, Hội phẫu thuật viên nội soi và tiêu hóa đã thiết lập một công cụ để đánh giá gọi là “những quy tắc cơ bản trong phẫu thuật nội soi” (Fundamentals in Laparoscopic Surgery-FLS) và là yêu cầu bắt buộc phải có trong việc xét duyệt cho các cá nhân có đủ điều kiện thực hành phẫu thuật của Hội đồng phẫu thuật Hoa Kỳ.",
    ],
  },
  {
    id: 3,
    title: "Sỏi túi mật hình thành thế nào và điều trị ra sao?",
    author: "Ego Creative",
    date: "30/03/2020",
    img: [
      "https://bizweb.dktcdn.net/100/382/483/articles/20190218-105741-902066-goi-kham-suc-khoe-max-800x800.jpg?v=1585508206147",
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/files/20190218-105741-902066-goi-kham-suc-khoe-max-800x800.jpg?v=1585508194162",
    ],
    content: [
      "ỏi túi mật là vật thể giống như đá, có thể nhỏ như hạt cát hoặc lớn như quả trứng, hình thành trong túi mật. Tùy thuộc triệu chứng, người có sỏi túi mật có thể hướng xử trí khác nhau.",
      "Túi mật là một cơ quan tương tự như một quả lê nhỏ nằm dưới gan ở phía bên phải của bụng. Các chức năng của túi mật là để lưu trữ và tống xuất mật, một chất lỏng được sản xuất bởi gan và giúp tiêu hóa chất béo trong thực phẩm mà bạn ăn. Mật được tạo thành từ nhiều chất, bao gồm cả bilirubin và cholesterol.",
      "Túi mật được kết nối với gan và ruột bằng các ống dẫn, bao gồm ống gan, ống túi mật và ống mật chủ. Khi bạn ăn, túi mật co bóp đẩy mật qua ống mật chủ vào ruột giúp tiêu hóa thức ăn, đặc biệt là các thức ăn béo.",
      "Sỏi túi mật thực tế không phải là viên sỏi (đá) mà là một thể rắn được hình thành trong túi mật do tình trạng quá bão hòa của 1 trong 3 thành phần của dịch mật là cholesterol, sắc túi mật và muối canxi. Bạn thậm chí không biết mình có sỏi túi mật cho đến khi nó nghẹt ở ống túi mật, gây đau và cần được điều trị ngay tức thì.",
      "Trong nhiều trường hợp, người có sỏi túi mật không có triệu chứng gì được gọi là sỏi im lặng. Nguy cơ xuất hiện triệu chứng sẽ tăng 1-2% mỗi năm.",
      "Triệu chứng chính của sỏi mật là đau, có thể kéo dài từ vài phút đến vài giờ. Đau có thể xảy ra khi sỏi mật di chuyển từ túi mật vào một ống (ống túi mật, ống gan và ống mật chủ).",
    ],
  },
  {
    id: 4,
    title: "Các phương pháp điều trị u tuyến thượng thận",
    author: "Ego Creative",
    date: "30/03/2020",
    img: [
      "https://bizweb.dktcdn.net/100/382/483/articles/thumbnail.jpg?v=1585508103373",
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/files/thumbnail.jpg?v=1585508094041",
    ],
    content: [
      "U tuyến thượng thận có thể gây rối loạn quá trình sản xuất một số chất nội tiết (hormone) trong cơ thể, dẫn đến nhiều vấn đề sức khỏe nghiêm trọng. Phẫu thuật là phương pháp điều trị khỏi bệnh trong nhiều trường hợp u tuyến thượng thận lành tính và ác tính. Trong đó phẫu thuật với sự hỗ trợ Robot là một hướng tiếp cận mới đầy triển vọng giúp nâng cao hiệu quả điều trị và sự an toàn cho người bệnh.",
      "Tuyến thượng thận là tuyến nằm phía trên của hai quả thận. Tuyến thượng thận có tiết ra các hormone giúp cơ thể chống stress, cân bằng chất điện giải, điều hòa huyết áp, điều khiển hoạt động hệ miễn dịch, hàn gắn các mô tế bào khi bị viêm nhiễm, chấn thương,...",
      "U tuyến thượng thận là khối u hiếm gặp, phát triển trong tuyến thượng thận và thường là u lành tính, chỉ có một tỉ lệ rất hiếm gặp là u ác tính (ung thư). U tuyến thượng thận thường chỉ xuất hiện ở một trong hai tuyến thượng thận nhưng trong một số trường hợp có thể cả hai tuyến.",
      "U tuyến thượng thận có thể biểu hiện nhiều bệnh cảnh khác nhau:",
      "Không có triệu chứng: Người bệnh phát hiện tình cờ khi khám sức khỏe tổng quát, siêu âm hoặc chụp cắt lớp vi tính (CT Scan) thấy u tuyến thượng thận.",
      "U có chức năng nội tiết, biểu hiện bởi các hội chứng: U tủy thượng thận do u tăng tiết catecholamine, gây ra cơn tăng huyết áp.,Hội chứng cushing do u tăng tiết cortisol. Bệnh nhân có triệu chứng tăng huyết áp, phù, vẻ mặt cushing, vết rạn da...,Cường aldosterone do tăng tiết chất aldosterone, làm giảm kali máu, dẫn đến tình trạng yếu cơ, tăng huyết áp,U gây tăng tiết hormone sinh dục.",
    ],
  },
  {
    id: 5,
    title: "Phẫu thuật điều trị hẹp khúc nối bể thận - niệu quản",
    author: "Ego Creative",
    date: "30/03/2020",
    img: [
      "https://bizweb.dktcdn.net/100/382/483/articles/can-zinc-really-help-protect-you-from-covid-19-800x600.jpg?v=1585508015070",
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/files/can-zinc-really-help-protect-you-from-covid-19-800x600.jpg?v=1585508002332",
    ],
    content: [
      "Hẹp khúc nối bể thận- niệu quản làm cản trở dòng nước tiểu từ bể thận xuống niệu quản. Nếu không được phát hiện và điều trị kịp thời, thận có thể bị tổn thương nghiêm trọng. Phẫu thuật nội soi là phương pháp điều trị hiệu quả nhất của bệnh hẹp khúc nối bể thận niệu quản, trong đó phẫu thuật có sự hỗ trợ Robot là một hướng phẫu thuật mới có nhiều ưu điểm vượt trội.",
      "Hẹp khúc nối bể thận - niệu quản là một bất thường ở phần nối giữa bể thận và niệu quản, gây cản trở dòng nước tiểu từ thận xuống niệu quản. Nước tiểu giữa bể thận với niệu quản bị tắc nghẽn làm bể thận bị ứ nước, giãn to. Nếu không được điều trị, thận có thể bị hủy hoại hoàn toàn.",
      "Hẹp khúc nối bể thận - niệu quản có thể xuất hiện ở một bên hoặc hai bên, nhưng tỉ lệ hẹp bên trái cao hơn bên phải gấp hai lần. Đây là nguyên nhân gây tắc nghẽn phổ biến nhất ở trẻ em. Bệnh thường gặp ở trẻ em khoảng 5 tuổi, ở người lớn bệnh thường được chẩn đoán ở tuổi 30-40 với tỉ lệ gặp ở nam cao gấp đôi nữ giới. Bệnh có khuynh hướng gia đình, nếu trong gia đình có người thân bị hẹp khúc nối bể thận niệu quản thì sẽ có nguy cơ mắc bệnh cao hơn.",
      "Có nhiều nguyên nhân gây hẹp khúc nối bể thận- niệu quản như:",
      "Bẩm sinh: niệu quản cắm vào bể thận ở vị trí bất thường, đoạn khúc nối không có nhu động:Mạch máu bất thường chèn ép vào niệu quản:,Phản ứng viêm tạo xơ sau phẫu thuật hoặc các chấn thương: sau phẫu thuật niệu quản, nang giả niệu nhiễm trùng, xơ hóa sau phúc mạc..:,Khối u lành tính hoặc ác tính ở đường tiết niệu...",
      "Triệu chứng chính của sỏi mật là đau, có thể kéo dài từ vài phút đến vài giờ. Đau có thể xảy ra khi sỏi mật di chuyển từ túi mật vào một ống (ống túi mật, ống gan và ống mật chủ).",
    ],
  },
  {
    id: 6,
    title: "Những lưu ý quan trọng trước khi khám sức khỏe tổng quát",
    author: "Ego Creative",
    date: "30/03/2020",
    img: [
      "https://bizweb.dktcdn.net/100/382/483/articles/20190218-105741-902066-goi-kham-suc-khoe-max-800x800.jpg?v=1585508206147",
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/files/menomonie-prepares-for-covid-19-800x600.jpg?v=1585507901731",
    ],
    content: [
      "Khám sức khoẻ tổng quát nhằm đánh giá tình trạng sức khoẻ tổng thể của mỗi người ở một thời điểm thông qua việc đánh giá chức năng của hầu hết các cơ quan trong cơ thể đồng thời giúp phát hiện các bệnh lý nếu có.",
      "Theo khuyến cáo từ Hiệp hội Tim mạch Mỹ, bạn cần tiến hành kiểm tra huyết áp hàng năm ở độ tuổi từ 18 trở lên để tầm soát nguy cơ tăng huyết áp. Bởi vậy, 18 sẽ là độ tuổi thích hợp để bạn bắt đầu khám sức khỏe tổng quát. Việc khám tổng quát sẽ giúp phát hiện và điều trị sớm các bệnh lý về huyết áp, tiểu đường, mỡ máu, viêm gan,...Đối với trẻ em, điều quan trọng là tầm soát các dị tật bẩm sinh, tình trạng dinh dưỡng. Khám sức khỏe tổng quát định kỳ giúp bản thân có cái nhìn chung về tình trạng sức khỏe hiện tại. Dựa vào kết quả thăm khám và xét nghiệm tổng quát, bác sĩ sẽ chẩn đoán, phát hiện bệnh sớm, điều trị kịp thời và chuẩn xác, mang lại cơ hội khỏi bệnh cao.",
      "Ngoài ra, khám bệnh tổng quát còn giúp bạn đánh giá và điều chỉnh lối sống thường ngày, nhờ đó hạn chế các rủi ro gây bệnh trong tương lai. Khám tổng quát định kỳ có ý nghĩa quan trọng với mọi giới và mọi lứa tuổi, cần được thực hiện 6 tháng/lần hoặc 1 năm/lần.",
      "Tùy theo từng độ tuổi, giới tính, gói khám sức khỏe tổng quát sẽ được thiết kế sao cho phù hợp nhằm mang lại hiệu quả tối ưu nhất cho người bệnh. Theo đó, một gói khám tổng quát có thể bao gồm:",
      "Khám lâm sàng tổng quát bao gồm: đánh giá biểu hiện lâm sàng của hệ tuần hoàn, hô hấp, tiêu hóa, thận - tiết - niệu, nội tiết, cơ - xương - khớp, hệ thần kinh, tâm thần, mắt, tai - mũi - họng, răng - hàm - mặt, da liễu. Bên cạnh đó có thể mở rộng phạm vi khám một số chuyên khoa khác như phụ khoa, nam khoa, lão khoa, ung bướu, ... tùy vào đặc điểm và yếu tố nguy cơ của mỗi người.",
      "Xét nghiệm máu, nước tiểu: Một số xét nghiệm máu và nước tiểu thường quy có thể kể đến như: công thức máu 18 thông số, nước tiểu 10 thông số, đường máu (glucose), mỡ máu (Cholesterol, Triglycerid, LDL, HDL), chức năng thận (ure, creatinin), men gan (SGOT, SGPT, GGT), viêm gan B (HBsAg), tìm hồng cầu trong phân, một số marker ung thư,...",
      "Chẩn đoán hình ảnh: Các chẩn đoán hình ảnh thường quy là chụp X Quang (nhiều vị trí như lồng ngực, cột sống cổ, cột sống thắt lưng, khung chậu, ... tùy theo đặc điểm và yếu tố nguy cơ từng người); Siêu âm ổ bụng, siêu âm tuyến giáp, siêu âm vú đối với nữ, ...",
      "Thăm dò chức năng: Điện tâm đồ, điện não đồ, đo loãng xương,... (Tùy vào yếu tố nguy cơ để có sự lựa chọn phù hợp). Tại bệnh viện Vinmec ngoài khám sức khỏe tổng quát, còn có nhiều gói khám sức khỏe khác nhau cho phù hợp với mục đích khám và sàng lọc bệnh của mình như :",
      "Gói khám sức khỏe tổng quát tiêu chuẩn, Gói khám sức khỏe tổng quát đặc biệt, Gói khám sức khỏe tổng quát VIP, Gói khám sức khỏe tổng quát kim cương, Các gói khám sàng lọc ung thư.",
      "Khám sức khỏe tổng quát là dịch vụ khám bệnh toàn diện mọi bộ phận, cơ quan trên cơ thể nhằm tầm soát bệnh lý. Bao gồm các hạng mục: khám lâm sàng tổng quát, tư vấn, xét nghiệm tổng quát, chẩn đoán hình ảnh, thăm dò chức năng.",
      "Nội dung khám tổng quát cụ thể:",
      "Kiểm tra thể lực, thông qua các thông số chung: huyết áp, đo chiều cao, cân nặng. Khám nội tổng quát, phát hiện một số bệnh lý nội khoa như tim mạch, tiêu hóa, hô hấp, thận – tiết niệu... Khám mắt, kiểm tra thị lực, tư vấn, phòng ngừa và điều trị các bệnh lý về mắt. Khám răng miệng tổng quát, kiểm tra tình trạng sâu răng, cao răng, lợi. Khám Tai – Mũi – Họng: Khám nội soi phát hiện các bệnh lý về xoang, dây thanh quản, họng mạn tính.",
      "Xét nghiệm máu tổng phân tích 18 thông số: đường máu (glucose), chức năng thận (Ure, Creatinin), men gan (AST, ALT, GGT), mỡ máu (Cholesterol, Triglycerid, LDL, HDL), acid uric máu (phát hiện viêm khớp, gout), viêm gan siêu vi B (HBSAG)...",
      "Tổng phân tích nước tiểu 10 chỉ số: LEU (bạch cầu), Nitrite (NIT), độ pH, BLD (hồng cầu), GLU (Glucose), PRO (đạm)...",
      "Chụp X-quang tim phổi. Siêu âm ổ bụng tổng quát. Siêu âm tuyến tiền liệt (nam giới). Siêu âm vú, tử cung, buồng trứng (nữ giới).",
      "Mỗi người tốt nhất nên chọn gói khám sức khỏe tổng quát, danh mục khám phù hợp với độ tuổi, nhu cầu và khả năng tài chính.",
    ],
  },
  {
    id: 7,
    title: "Biến chứng của phẫu thuật cắt túi mật nội soi",
    author: "Ego Creative",
    date: "30/03/2020",
    img: [
      "https://bizweb.dktcdn.net/100/382/483/articles/covid-800-x-600.jpg?v=1585507806647",
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/files/covid-800-x-600.jpg?v=1585507783853",
    ],
    content: [
      "Những biến chứng nghiêm trọng xảy ra trong cắt túi mật nội soi bao gồm tổn thương đường mật, rò mật, chảy máu và tổn thương ruột do sự lựa chọn bệnh nhân, kinh nghiệm của phẫu thuật viên và sự gượng gạo về kỹ thuật. Kiểu tổn thương đường mật chính do nhiệt có thể không nhận ra trong lúc mổ và thường liên quan đến ống gan chung hoặc ống gan phảiTrong thời điểm dịch bệnh Covid-19 vẫn đang diễn ra phức tạp, nhiều cha mẹ băn khoăn không biết có nên đưa con đến bệnh viện để tiêm phòng không. Loại vắc xin nào có thể được trì hoãn lịch tiêm, loại vắc xin nào không thể?",
      "Trong vòng 5 năm đầu đời trẻ mới xây dựng được hệ miễn dịch hoàn thiện vì vậy tiêm chủng đầy đủ là một cách tăng cường sức đề kháng hiệu quả với trẻ. Cha mẹ cần lưu ý khi đưa trẻ đi tiêm phòng tuân thủ đúng những khuyến cáo của Tổ chức Y tế thế giới WHO và Bộ y tế như đeo khẩu trang đúng cách, rửa tay thường xuyên bằng dung dịch sát khuẩn. Ngoài ra các phụ huynh luôn cập nhật thông tin đúng đủ về chủng Covid -19 này để bảo vệ bản thân và gia đình khỏi Virus Corona.",
      "Trong tình hình dịch bệnh hiện nay, việc tiêm vaccine đúng thời điểm và đúng lịch là rất quan trọng và cần thiết để kịp thời phòng được bệnh đã tiêm và để không nhầm lẫn với bệnh khác, không gây lo lắng cho gia đình và cộng đồng. Nếu trong thời điểm này trẻ bị ho hay sốt các phụ huynh sẽ rất hoảng sợ không biết triệu chứng này do Covid-19 hay do bệnh khác vì một số triệu chứng của nhiễm Covid-19 giống như cúm hoặc các bệnh về đường hô hấp khác",
      "Những khu vực không có dịch các mẹ vẫn có thể cho bé đi tiêm phòng theo lịch tiêm chủng phù hợp với lứa tuổi, nhưng tránh những nơi tụ tập đông người, nên đặt lịch hẹn trước tránh không phải chờ đợi và đến cơ sở y tế tin tưởng cơ sở vật chất đảm bảo.",
    ],
  },
];

const Home = () => {

  const addBlogs = () => {
    news.forEach(
      async (item) =>
        await setDoc(doc(firebase_store, "blogs", `blog${item.id}`), {
          ...item,
        })
    );
  };

  useEffect(() => {
    addBlogs();
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <About />
      <ServiceTab />
      <MedicalProduct />
      <NewsAchievements />
      <Footer />
    </div>
  );
};

export default Home;
