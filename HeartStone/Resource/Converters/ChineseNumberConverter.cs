using System;
using System.Globalization;
using System.Windows.Data;
using System.Windows.Markup;

namespace Resource.Converters
{
    public class ChineseNumberConverter:IValueConverter
    {
        private const string ChineseOne = "一";
        private const string ChineseTwo = "二";
        private const string ChineseThree = "三";
        private const string ChineseFour = "四";
        private const string ChineseFive = "五";
        private const string ChineseSix = "六";
        private const string ChineseSeven = "七";
        private const string ChineseEight = "八";
        private const string ChineseNine = "九";
        private const string ChineseTen = "十";


        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            int number;
            if (int.TryParse(value.ToString(), out number))
            {
                switch (number)
                {
                    case 1:
                        return ChineseOne;
                    case 2:
                        return ChineseTwo;
                    case 3:
                        return ChineseThree;
                    case 4:
                        return ChineseFour;
                    case 5:
                        return ChineseFive;
                    case 6:
                        return ChineseSix;
                    case 7:
                        return ChineseSeven;
                    case 8:
                        return ChineseEight;
                    case 9:
                        return ChineseNine;
                    case 10:
                        return ChineseTen;
                }
            }

            return value;
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            if (null == value)
                return string.Empty;

            switch (value.ToString())
            {
                case ChineseOne:
                    return 1;
                case ChineseTwo:
                    return 2;
                case ChineseThree:
                    return 3;
                case ChineseFour:
                    return 4;
                case ChineseFive:
                    return 5;
                case ChineseSix:
                    return 6;
                case ChineseSeven:
                    return 7;
                case ChineseEight:
                    return 8;
                case ChineseNine:
                    return 9;
                case ChineseTen:
                    return 10;
                default:
                    return value;
            }
        }
    }
}
